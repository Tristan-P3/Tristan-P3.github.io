import React, { Component } from 'react';
export default class ContactUs extends Component {
	render() {
		let resumeData = this.props.resumeData;
		// Find LinkedIn link from socialLinks
		const linkedin = resumeData.socialLinks && resumeData.socialLinks.find(link => link.name === "linkedin");
		return (
			<section id="contact">
				<div className="row section-head">
					<div className="ten columns">
						<p className="lead">
							Feel free to contact me for any work or suggestions below:
						</p>
					</div>
				</div>
				<div className="row">
					<aside className="eigth columns footer-widgets">
						<div className="widget">
							<h4>
								LinkedIn: {linkedin && (
									<a href={linkedin.url} target="_blank" rel="noopener noreferrer">{linkedin.url}</a>
								)}
							</h4>
							<h4>
								Email: <a href={`mailto:${resumeData.email}`}>{resumeData.email}</a>
							</h4>
						</div>
					</aside>
				</div>
			</section>
		);
	}
}