import React from 'react';
import { HiArrowSmRight } from 'react-icons/hi';
import service1 from '../assets/service1.png';
import service2 from '../assets/service2.png';
import service3 from '../assets/service3.png';
import service4 from '../assets/service4.png';

function Services() {
	return (
		<div className='services-container mx-3 py-3'>
			<div className='container'>
				<div className='service one'>
					<p>Oferta de la Semana</p>
					<h4>Envío Gratis</h4>
					<button>
						Conoce más <HiArrowSmRight />
					</button>
					<div className='image'>
						<img
							src={service1}
							alt='service'
						/>
					</div>
				</div>
				<div className='service two'>
					<div className='content'>
						<h4>Hasta 50% de descuento</h4>
						<button>
							Conoce más <HiArrowSmRight />
						</button>
					</div>
					<div className='image'>
						<img
							src={service2}
							alt='service'
						/>
					</div>
				</div>
				<div className='service three'>
					<div className='image'>
						<img
							src={service3}
							alt='service'
						/>
					</div>
					<div className='content'>
						<h4>Promos Online</h4>
						<button>
							Conoce más <HiArrowSmRight />
						</button>
					</div>
				</div>
				<div className='service four'>
					<div className='image'>
						<img
							src={service4}
							alt='service'
						/>
					</div>
					<p>Ofertas de Aniversario</p>
					<h4>Envío Gratis</h4>
					<button>
						Conoce más <HiArrowSmRight />
					</button>
				</div>
			</div>
		</div>
	);
}

export default Services;
