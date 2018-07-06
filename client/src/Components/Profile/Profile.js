import React from "react";
import "./Profile.css";

const Profile = () => (
    <div>
        <h1>Create a Profile</h1>
        <form>
            <label>
            Name:
            <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
        </form> 
    </div>
)

export default Profile;