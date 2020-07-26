import React from 'react'
import Typography from '@material-ui/core/Typography';
import Jobs from './jobs';
import './App.css';

export default function Job({job}) {
    return (
        <div className="job">
            {job.title} {job.company}
        </div>
    )
}