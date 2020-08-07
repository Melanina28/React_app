import React, {Component} from "react";
import './AddProyectComponent.css';
import accountAPI from "../../api/accountAPI";
import {
    Input, Button, message, Form,Modal,Row, Col
} from 'antd';
import 'antd/dist/antd.css';
import auth from "../../config/auth";
import diagramAPI from "../../api/diagramAPI";
const { TextArea } = Input;



class AddProyectComponent extends  Component {

    state = {
        competence: [],
        form: {
            competence: '',
            name: '',
            objetivo:'',
            problematica: '',
        },
    };

    componentDidMount() {
        diagramAPI.postProyect().then((data)=>{
            console.log(data.data.message.data, 'data')
            .then(res =>{
                console.log(res);
                console.log(res.data);
            })
        }).catch((err)=>{

        });

        console.log(this.state);
    }
 async   componentDidMount() {

        diagramAPI.getCompetence().then((data)=>{
            console.log(data.data.message.data, 'data');

            this.setState({competence: data.data})

        }).catch((err)=>{

        });

        console.log(this.state);
    }


    handleChange = (e) => {
        this.setState({
            ...this.state,
            form: {
                competence: this.state.form.competence,
                name: this.state.form.name,
                objetivo: this.state.form.objetivo,
                problematica : this.state.form.problematica,
                [e.target.name]: e.target.value,
            },
        });
    }



    render() {
        return (
            <div className="contenedor">
                <h1>Nuevo proyecto</h1>
                <br/>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <Form.Item>
                        <select  name="competencias" onChange={ this.handleChange }
                                defaultValue={ this.state.form.competence }>
                            {
                                this.state.competence.map(competence =>
                                    <option>{competence.name}</option>
                                )
                            }
                        </select>
                        </Form.Item>
                        <br/>
                        <br/>

                        <Input name="name" onChange={ this.handleChange }
                               defaultValue={ this.state.form.name }/>

                        <br/>
                        <br/>
                        <TextArea name="objetivo" onChange={ this.handleChange }
                                  defaultValue={ this.state.form.objetivo }/>
                        <br/>
                        <br/>
                        <TextArea name="problematica" onChange={ this.handleChange }
                                  defaultValue={ this.state.form.problematica }/>
                        <br/>
                        <br/>
                        <h2>Agrega los recursos para resolver la problematica</h2>
                        <br/>
                        <br/>
                        <Row>
                            <Col xs={2} sm={4} md={6} lg={8} xl={10}>

                                <Button  shape="round">Agregar</Button>
                                <Button onClick={ this.handleLogin } type="submit" shape="round">siguiente</Button>
                            </Col>
                            <Col xs={20} sm={16} md={12} lg={8} xl={4}>

                            </Col>
                            <Col xs={2} sm={4} md={6} lg={8} xl={10}>

                            </Col>
                        </Row>
                    </form>
                </div>
            </div>
        )


    }
}
export default AddProyectComponent;