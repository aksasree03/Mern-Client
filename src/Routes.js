import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Profile from './Profile';
import TaskManager from './TaskManager';

const AppRoutes = () => (
  <Routes>
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/tasks" element={<TaskManager />} />
  </Routes>
);

export default AppRoutes;