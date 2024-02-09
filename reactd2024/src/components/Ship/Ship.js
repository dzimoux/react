import React from 'react';

const Ship = ({ship}) => {
    const {mission_name, launch_year, links} = ship;
    const missionPatchUrl = links && links.mission_patch_small;
   if(launch_year != 2020){ return (
        <div>
            <div>mission: {mission_name}</div>
            <div>year: {launch_year}</div>
            <div>MissionPatch: <img src={missionPatchUrl} alt={'missionPatch'}/> </div>
            <div>The End</div>
        </div>
    );
}; }

export {Ship};