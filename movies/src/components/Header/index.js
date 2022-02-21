import React from 'react';
import { Link } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';
import { Menu } from 'antd'

export default function Header() {
    return (
        <>
            <Menu mode='horizontal'>
                <Menu.Item >
                    <Link to='/' >
                        <HomeOutlined />
                        Home
                    </Link>
                </Menu.Item>
            </Menu>
        </>
    )
}