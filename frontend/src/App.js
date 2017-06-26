import React, { Component } from 'react';
import { Table, Layout } from 'antd';
// const { Header, Footer, Sider, Content } = Layout;
import './App.css';

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
  constructor(...props){
    super(...props);
    this.state = {dataSource:[]};
  }

  componentDidMount(){
    var value = document.getElementById('my_data').value;
    var data = JSON.parse(value);
    this.setState({dataSource:data});
  }
  render() {
    return (
      <div className="App">
        <Layout>
          <Layout.Header>Header</Layout.Header>
          <Layout>
            <Layout.Sider>Sider</Layout.Sider>
            <Layout.Content style={{ height: 780 }}>
              <Table dataSource={this.state.dataSource} columns={columns} />
            </Layout.Content>
          </Layout>
          <Layout.Footer>Footer</Layout.Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
