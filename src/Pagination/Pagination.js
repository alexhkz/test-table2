import React from 'react';

const Pagination = ({
	pages, 
	currentPage, 
	onNextClick, 
	onPreviousClick, 
	buttonNextDisabled, 
	buttonPreviousDisabled,
	currentPageActive,
	currentPageNumber
}) => {
	return (
		<nav aria-label="...">
			<ul className="pagination">
				<li className={`page-item ${buttonPreviousDisabled}`}>
					<a className="page-link" href="#" tabIndex="-1" onClick={ () => {onPreviousClick()} }>
						Previous
					</a>
				</li>
				{pages.map((p) => {
						return (
							<li className={ (currentPageNumber === p) ? `page-item ${currentPageActive}` : 'page-item'} key={p}>
								<a className="page-link" href="#" onClick={ () => {currentPage(p)} }>
									{p}
								</a>
							</li>
						)
					})
				}
				<li className={`page-item ${buttonNextDisabled}`}>
					<a className="page-link" href="#" onClick={ () => {onNextClick()} }>
						Next
					</a>
				</li>
			</ul>
		</nav>
	)
}

export default Pagination;


