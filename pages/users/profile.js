import React, { Component } from "react"
import MainLayout from "../../components/layout/mainLayout";
import axios from "axios"
class Profile extends Component {
    static async getInitialProps({ query }) {
        let profileData;
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${query.userId}`)
        profileData = [response.data];
        return {
            profileData
        }
    }
    renderProfileData = (profile) => (
        profile.map((prof, i) => (
            <>
                <div>
                    <p>Name:{prof.name}</p>
                    <p>Email:{prof.email}</p>
                    <p>Contact:{prof.phone}</p>
                </div>

            </>

        ))
    )
    render() {
        return (

            <div>
                <MainLayout>
                    <h1>   Profile data </h1>
                    {this.renderProfileData(this.props.profileData)}
                </MainLayout>
            </div>
        )

    }
}
// Profile.getInitialProps = () => {
//     return {
//         values: "123"
//     }

// }
export default Profile
