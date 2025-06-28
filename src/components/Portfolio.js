import React, { Component } from 'react';
export default class Porfolio extends Component {
	render() {
		let resumeData = this.props.resumeData;
		return (
			<section id="portfolio">
				<div className="row">
					<div className="twelve columns collapsed">
						<h1>Check Out Some of My Publicly Available Works.</h1>
						<div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
							{
								resumeData.portfolio && resumeData.portfolio.map((item) => {
									return (
										<div className="portfolio-item" key={item.name}>
											<div className="item-wrap aspect-ratio-box">
												<a href={item.link} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>
													<img src={`${item.imgurl}`} className="item-img aspect-ratio-img" alt={item.name} />
													<div className="overlay">
														<div className="portfolio-item-meta">
															<h5>{item.name}</h5>
															<p>{item.description}</p>
														</div>
													</div>
												</a>
											</div>
										</div>
									)
								})
							}
						</div>
					</div>
				</div>
			</section>
		);
	}
}