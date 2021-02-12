import React, { Component } from "react"
import MainLayout from "../../components/layout/mainLayout";
import axios from "axios";
import Link from "next/link"
class Users extends Component {
    static async getInitialProps(context) {
        let userData;
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
            userData = response.data;
        }
        catch (error) {

        }
        return {
            user: {
                name: "Next",
                lastName: "Javascript"
            },
            userData
        }
    }
    constructor(props) {
        super(props)
    }

    renderUserList = (users) => (
        users.map((user, i) => (
            // <Link href={`/users/profile?userId=${user.id}`}>
            <Link href={{
                pathname: "/users/profile",
                query: {
                    userId: user.id
                }
            }}>
                <div>
                    <a key={i}>{user.name}</a>
                </div>
            </Link>
        ))
    )

    render() {
        return (
            <div>
                <MainLayout>
                    <h1> pick a user</h1>
                    <ul>{this.renderUserList(this.props.userData)}</ul>
                </MainLayout>
            </div>
        )
    }
}
export default Users
