import React from 'react';
import Responsive from 'react-responsive';

export const Desktop = ({ children }) => <Responsive minWidth={1168} children={children} />;
export const Tablet = ({ children }) => <Responsive minWidth={768} maxWidth={1167} children={children} />;
export const Default = ({ children }) => <Responsive minWidth={768} children={children} />;
export const Mobile = ({ children }) => <Responsive maxWidth={767} children={children} />;
