import React, { Component } from 'react';
export default class Footer extends Component {
	render() {
		let resumeData = this.props.resumeData;
		return (
			<footer>
				<div className="row">
					<div className="twelve columns">
						<ul className="social-links">
							{
								resumeData.socialLinks && resumeData.socialLinks.map((item) => {
									return (
										<li>
											<a href={item.url}>
												<i className={item.className} />
											</a>
										</li>
									)
								})
							}
						</ul>

					</div>
					<div className="footer-contact" style={{ textAlign: 'center', marginTop: '10px' }}>
						<a href="mailto:tristan.peetre@gmail.com" style={{ color: '#fff', textDecoration: 'none' }}>
							<i className="fa fa-envelope" style={{ marginRight: '6px' }}></i>tristan.peetre@gmail.com
						</a>
					</div>
					<div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
				</div>
			</footer>
		);
	}
}