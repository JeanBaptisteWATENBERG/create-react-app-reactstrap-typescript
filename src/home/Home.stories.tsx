import React from "react";
import Home from "./Home";
import { text } from '@storybook/addon-knobs/react';

export default {
    title: 'Home',
  };

export const defaultHome = () => <Home name={text('Name', undefined)} />;