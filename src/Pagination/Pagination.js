import React from 'react';

const Pagination = ({pages, currentPage, onNextClick, onPreviousClick}) => {
	return (
		<nav aria-label="...">
			<ul className="pagination">
				<li className="page-item">
					<a className="page-link" href="previous page" tabIndex="-1" onClick={ () => {onPreviousClick()} }>
						Previous
					</a>
				</li>
				{
					pages.map((p) => {
						return(
							<li className="page-item" key={p}>
								<a className="page-link" href="page" onClick={ () => {currentPage(p)} }>
									{p}
								</a>
							</li>
						)
					})
				}
				<li className="page-item">
					<a className="page-link" href="next page" onClick={ () => {onNextClick()} }>
						Next
					</a>
				</li>
			</ul>
		</nav>
	)
}

export default Pagination;


