import React, { Component } from 'react';
import Amplify, { Storage, Auth } from 'aws-amplify';
import { FilePicker } from 'react-file-picker'
import Translate from 'containers/Translate';
import Dashboard from 'components/Dashboard';
import Section from 'components/Section';
import Button from 'components/Button';
import Note from 'components/Note';


require('./index.scss');

export default class Resources extends Component {

  constructor(props) {
    super(props);

    this.state = {
      file: null,
      uploadSuccessful: false,
    }

    this._uploadFile = this._uploadFile.bind(this);
  }

  _uploadFile () {
    Storage.put('job_list.pdf', this.state.file, {
        level: 'protected',
        contentType: 'application/pdf'
    })
    .then (result => this.setState({uploadSuccessful: true}))
    .catch(err => console.log(err));
  }

  _openLink (key, level) {
    Storage.get(key, { 
      level,
      expires: 5
    })
    .then(result => {
      window.open(result);
    });
  }

  render () {
    return (
      <Dashboard title="My Resources" titleEs="Mis Recursos">
        {this.props.attributes && this.props.attributes['custom:role'] === 'Admin' ?
        <Section title="Upload Job List" titleEs="Subir Lista de Trabajos">
          <div>
            <FilePicker
              extensions={['pdf']}
              onChange={FileObject => this.setState({file: FileObject})}
              onError={errMsg => console.log(errMsg)}
            >
            <button className="app-Button-primary">
              Select File (PDF)
            </button>
            </FilePicker>
            <Button
                disabled={!this.state.file || this.state.uploadSuccessful}
                click={this._uploadFile}
              >
              <Translate language="en">
                Upload File
              </Translate>
              <Translate language="es">
                Subir
              </Translate>
            </Button>
            {this.state.uploadSuccessful && <p>Upload Successful!</p>}
          </div>
        </Section>
        :
        <Section title="Member Videos" titleEs="Videos de Miembro">
          <Button
            click={() => { window.open('https://www.carpenters.org/video/'); }}
          >
            <Translate language="en">
              See Videos
            </Translate>
            <Translate language="es">
              Ver Videos
            </Translate>
          </Button>
        </Section>}
        <Section title="Benefits Infomration" titleEs="Informacion de Beneficios">
          <div>
            <Note>
              <Translate language="en">
                Access information about your benefits.
              </Translate>
              <Translate language="es">
                Accessa informacion de tus beneficios.
              </Translate>
            </Note>
            <Button
              click={() => this._openLink('member_benefits.pdf', 'protected')}
            >
              <Translate language="en">
                See Benefits Information
              </Translate>
              <Translate language="es">
                Ver Informacion de Beneficios
              </Translate>
            </Button>
          </div>
        </Section>
        <Section title="Available Jobs" titleEs="Trabajos Disponibles">
          <div>
            <Note>
              <Translate language="en">
                Access the most recent available jobs.
              </Translate>
              <Translate language="es">
                Accessa informacion de los trabajos disponibles mas recientes.
              </Translate>
            </Note>
            <Button
              click={() => this._openLink('job_list.pdf', 'protected')}
            >
              <Translate language="en">
                See Available Jobs
              </Translate>
              <Translate language="es">
                Ver Trabajos
              </Translate>
            </Button>
          </div>
        </Section>
      </Dashboard>
    );
  }
}