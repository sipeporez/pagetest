import React from 'react'
import { useState, useEffect } from 'react';
import RealtimeChart from './RealtimeChart';


export default function WebSocketProvider({ message }) {
    const [socket, setSocket] = useState(null);
    const [data, setData] = useState({
        x : [],
        y : [],
        z : [],
})
    const [isOpen, setIsOpen] = useState(false);

    // const axes = ['waveform_x', 'waveform_y', 'waveform_z'];


    useEffect(() => {
        const token = sessionStorage.getItem('Token');
        const userid = sessionStorage.getItem('userid');
        const ws = new WebSocket(`ws://192.168.0.126:8080/realtimews?auth=${userid}`);

        ws.onopen = () => {
            console.log('WebSocket connection established.');
            setIsOpen(true);
        };

        ws.onmessage = (event) => {

            try {
                const realTimeData = JSON.parse(event.data);
                console.log('Received data:', realTimeData);
                // setData((prevData) => ([
                //     {xAxis: [...prevData.xAxis, realTimeData.spectrum_x]},
                //     {yAxis: [...prevData.yAxis, realTimeData.spectrum_y]},
                //     {zAxis: [...prevData.zAxis, realTimeData.spectrum_z]},
                // ]))
                console.log('wave_x', realTimeData.waveform_x)
                const newData = { 
                    waveform_x : realTimeData.waveform_x, 
                    waveform_y : realTimeData.waveform_y, 
                    waveform_z : realTimeData.waveform_z,
                }

                const nowTime = new Date().toISOString();

                setData((prevData) => ({
                    x: [...prevData.x, { time: nowTime, value: newData.waveform_x }],
                    y: [...prevData.y, { time: nowTime, value: newData.waveform_y }],
                    z: [...prevData.z, { time: nowTime, value: newData.waveform_z }],
                }));

            } catch (error) {
                console.error('WebSocket error:', error);
                console.error('Error message:', error.message);
                console.error('Error type:', error.type);
                console.error('Error target:', error.target);
            }
        };

        ws.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        ws.onclose = () => {
            console.log('WebSocket connection closed.');
            setIsOpen(false);
        };

        setSocket(ws);

        return () => {
            if (ws.readyState === WebSocket.OPEN) {
                ws.close();
            }
        };
    }, []);

    useEffect(() => {
        if (socket && message && isOpen) {
            console.log('===> readyState', socket.readyState)
            if (socket.readyState === WebSocket.OPEN) {
                socket.send(message);
                console.log('Message sent:', message);
            } else {
                console.log('Empty message not sent');
            }
        }
    }, [message, socket, isOpen])

    console.log('message', message)
    console.log('datax', data.x)

    return (
        <div>
            <div className="p-20">           
                <RealtimeChart data = {data.x} axis = 'waveform_x' colour = '#6f63b9'/>
                <RealtimeChart data = {data.y} axis = 'waveform_y' colour = '#ADD8E6'/>
                <RealtimeChart data = {data.z} axis = 'waveform_z' colour = '#aadd80'/>
            </div>
        </div>
    )
}
