import React from 'react';
import s from "./Profile.module.css"
import {EditProfile} from "./EditProfile/EditProfile";
import {SliderCards} from "./SliderCards/SliderCards";
import {PacksList} from "./PacksList/PacksList";

function Profile() {
    return (
        <div className={s.profile}>
            <div className={s.profile_box}>
                <EditProfile/>
                <SliderCards/>
            </div>
            <div>
                <PacksList/>
            </div>
        </div>
    );
}

export default Profile;
