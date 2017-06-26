import React, { Component } from 'react';
import { Table, Layout } from 'antd';
// const { Header, Footer, Sider, Content } = Layout;
import './App.css';
import 'whatwg-fetch';
const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
}, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
}, {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
}];

class App extends Component {
    constructor(...props) {
        super(...props);
        this.state = { dataSource: [], page: 10 };
    }

    componentDidMount() {
        let self = this;
        var value = document.getElementById('my_data').value;
        self.setState({ dataSource: JSON.parse(value) });
    }

    checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
            return response
        } else {
            var error = new Error(response.statusText)
            error.response = response
            throw error
        }
    }

    parseJSON(response) {
        var result = response.json();
        return result;
    }

    _handleChange() {
        let self = this;
        self.state.page++;
        fetch(`/user?page=${self.state.page}`)
            .then(self.checkStatus)
            .then(self.parseJSON)
            .then(function (data) {
                console.log('request succeeded with JSON response', data)
            }).catch(function (error) {
                console.log('request failed', error)
            })
    }
    render() {
        return (
            <div className="App">
                <Layout>
                    <Layout.Header>Header</Layout.Header>
                    <Layout>
                        <Layout.Sider>Sider</Layout.Sider>
                        <Layout.Content>
                            <Table dataSource={this.state.dataSource} columns={columns} onChange={this._handleChange.bind(this)} />
                        </Layout.Content>
                    </Layout>
                    <Layout.Footer>Footer</Layout.Footer>
                </Layout>
            </div>
        );
    }
}

export default App;