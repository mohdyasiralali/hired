/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";



class FreeSolo extends React.Component {

    constructor(props){
        super(props)
    }
    render() {
        console.log('search ',this.props.users)
        return (
            <div style={{width:"100%"}}>
                {/* <Autocomplete
                    id="free-solo-demo"
                    freeSolo
                    options={top100Films.map(option => option.title)}
                    renderInput={params => (
                        <TextField
                            {...params}
                            label="freeSolo"
                            margin="normal"
                            variant="outlined"
                        />
                    )}
                /> */}
                <Autocomplete
                    freeSolo
                    id="free-solo-2-demo"
                    disableClearable
                    options={this.props.users.map(option => option.name)}
                    renderInput={params => (
                        <TextField
                            {...params}
                            // label="Search input"
                            // margin="normal"
                            // variant="outlined"
                            // InputProps={{
                            //     ...params.InputProps,
                            //     type: "search"
                            // }}
                        />
                    )}
                />
            </div>
        );
    }
}

export default FreeSolo;