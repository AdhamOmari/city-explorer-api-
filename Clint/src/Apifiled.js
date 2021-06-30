import React, { Component } from 'react'
import Alert from 'react-bootstrap/Alert'

export class Apifiled extends Component {
    render() {
        return (
            <div>
                {this.props.alert &&
                    <Alert variant={'danger'}>
                        {this.props.masseg}    
                        </Alert>
                      
                }
                <>
                {this.props.alerte &&
                <Alert variant={'danger'}>
                            {this.props.massege}
                        </Alert>}
                </>
            </div>
        )
    }
}

export default Apifiled
