// REFERENCES
// https://material-ui.com/components/autocomplete/
// npm install @material-ui/core
// npm install @material-ui/lab

import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Swal from "sweetalert2";

class SkillsTab extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            skills: [],
            user_skills: [],
            classes: this.useStyles
        };

        this.useStyles = this.useStyles.bind(this);
        this.onSkillsChange = this.onSkillsChange.bind(this);
        this.onSubmitAddSkills = this.onSubmitAddSkills.bind(this);
        this.onClickDeleteSkill = this.onClickDeleteSkill.bind(this);
    }
    useStyles() {
        makeStyles(theme => ({
            root: {
                width: 500,
                "& > * + *": {
                    marginTop: theme.spacing(3)
                }
            }
        }));
    }

    // ======================================= GET USER SKILLS
    componentDidMount() {
        this.axs();
    }
    axs() {
        axios.get("/user_skills").then(response => {
            this.setState({ user_skills: response.data });
            // return response.data;
        });
    }
    // ======================================= SET STATE ON Autocomplete CHANGE

    onSkillsChange(e, values) {
        e.preventDefault();
        this.setState({ skills: values });
        // console.log(this.state.user_skills);
    }
    // ======================================= DELETE SKILL

    onClickDeleteSkill(e) {
        e.preventDefault();
        // Axs delete
        let url = "/skill/delete/" + e.target.id;
        axios.delete(url).then(response => {
            // console.log('MSHAXS', response.data)
            this.setState({ user_skills: response.data });
            // return response.data;
        });
    }
    // ======================================= ADD SKILL NOTE:{Missing Clear Autocomplete value}

    onSubmitAddSkills(e) {
        e.preventDefault();

        let user_skills_array = [];
        this.state.user_skills.map(skill => {
            user_skills_array.push(skill.id);
        });

        let skills_array = [];
        this.state.skills.map(skill => {
            let bool = user_skills_array.includes(skill.id);
            if (!bool) {
                skills_array.push(skill.id);
            }
        });
        axios.post("/skills/add", skills_array).then(response => {
            console.log("save Skills", response.data);
            this.setState({ user_skills: response.data });
            this.setState({ skills: response.data });
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Successfully Added",
                showConfirmButton: false,
                timer: 2000
            });
        });
    }
    // ======================================= RENDER ALL SKILL FROM PROPS

    renderUserSkills() {
        return this.state.user_skills.map(skill => {
            return (
                <button
                    key={skill.id}
                    id={skill.id}
                    value={skill.title}
                    className="btn btn-sm btn-info btn-round mr-1"
                    onClick={this.onClickDeleteSkill}
                >
                    {skill.title}
                    <span className="ml-3">x</span>
                </button>
            );
        });
    }
    render() {
        return (
            // <div className="tab-pane" id="skills">
            <div className="container mt-3">
                <form onSubmit={this.onSubmitAddSkills}>
                    <div className={this.state.classes.root}>
                        <Autocomplete
                            multiple
                            id="tags-standard"
                            options={this.props.sys_skills}
                            getOptionLabel={option => option.title}
                            // defaultValue={[this.props.sys_skills[1]]}
                            onChange={this.onSkillsChange}
                            renderInput={params => (
                                <TextField
                                    {...params}
                                    variant="standard"
                                    label="Skills"
                                    placeholder="eg. React, Laravel, etc."
                                />
                            )}
                        />
                        <div className="text-right">
                            <input
                                type="submit"
                                value="Add"
                                className="btn btn-primary btn-sm mt-3"
                            ></input>
                        </div>
                    </div>
                </form>
                <div>{this.renderUserSkills()}</div>
            </div>
            // </div>
        );
    }
}
export default SkillsTab;
