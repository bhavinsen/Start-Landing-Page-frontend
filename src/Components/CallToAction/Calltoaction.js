import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import action_img from '../../Assets/Images/call-to-action.png'
import './Calltoaction.scss'

const Calltoaction = () => {
    return (
        <div className='callto_action'>
            <section id="call-to-action" class="call-to-action">
                <div class="call-action-image">
                    <img src={action_img} alt="call-to-action" />
                </div>
                <div class="container-fluid">
                    <div class="row justify-content-end">
                        <div class="col-lg-6">
                            <div class="call-action-content text-center">
                                <h2 class="call-title">Curious to Learn More? Stay Tuned</h2>
                                <p class="text">You let us know whenever you want us to update anything or think something can
                                    be optimised.</p>
                                <div class="call-newsletter">
                                    <div className='mail_icon'>
                                        <AiOutlineMail />
                                    </div>
                                    <input type="text" placeholder="john@email.com" />
                                    <button type="submit">SUBSCRIBE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Calltoaction