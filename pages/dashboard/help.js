import React from 'react'
import SidebarV2 from '../../components/dashComponents/SidebarV2'
import { Typography } from '@material-ui/core'


export default function help() {
    return (
        <div>
            <SidebarV2>
                <Typography variant="h5">
                    This will display the Help section
                </Typography>
            </SidebarV2>
        </div>
    )
}
