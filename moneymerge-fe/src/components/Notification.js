"use client"
import { useEffect, useState } from "react";
import EventSource from 'eventsource-polyfill';
// npm install eventsource-polyfill

const NotificationComponent = () => {
    const [notifications, setNotifications] = useState([]);
  
    useEffect(() => {
      const eventSource = new EventSource('http://localhost:8080/api/notifications/subscription');
  
      eventSource.onmessage = (event) => {
        const newNotification = JSON.parse(event.data);
        setNotifications((prev) => [...prev, newNotification]);
        
        console.log("notification: " + notifications);
        setTimeout(() => {
          setNotifications((prev) => prev.filter((n) => n !== newNotification));
        }, 3000); // 3초 후 알림 제거
      };
  
      eventSource.onerror = (error) => {
        console.error('EventSource failed:', error);
        eventSource.close();
      };
  
      return () => {
        eventSource.close();
      };
    }, []);
  
    return (
      <div className="notification-container">
        {notifications.map((notification, index) => (
          <div key={index} className="notification">
            {notification.message}
          </div>
        ))}
        <style jsx>{`
          .notification-container {
            position: fixed;
            bottom: 20px;
            left: 20px;
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          .notification {
            background-color: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 10px;
            border-radius: 5px;
            animation: fade-in-out 3s forwards;
          }
          @keyframes fade-in-out {
            0% { opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { opacity: 0; }
          }
        `}</style>
      </div>
    );
  };
  
  export default NotificationComponent;