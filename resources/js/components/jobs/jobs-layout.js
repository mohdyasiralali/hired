import React from "react";
import JobCard from './job-card';

class JobsLayout extends React.Component {
    render() {
        return (
            <section className="my-5">
                <div className="container p-5 rounded jobs-search">
                    <div className="row container">
                        <JobCard></JobCard>
                    </div>
                </div>
            </section>
        );
    }
}

export default JobsLayout;
