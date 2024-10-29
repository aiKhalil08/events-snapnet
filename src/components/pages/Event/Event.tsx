import React, { FC } from 'react';
import styles from './Event.module.css';
import { useParams } from 'react-router-dom';
import { useEvent } from '../../../queries/events-query';
import { Loader2 } from 'lucide-react';
// import { Event } from '../../../types';

interface EventProps {}

const Event: FC<EventProps> = () => {
    const {id: eventId} = useParams();

    const {isPending, error, data: event} = useEvent(eventId as string);

    if (isPending) {
        return (
            <div className='mt-28 w-full grid place-items-center'>
                <Loader2 size={64} className='animate-spin' />
            </div>
        )
    }
    
    if (error) {
        return (
            <div className='mt-28 w-full grid place-items-center'>
                <p>Oops! An error occured</p>
            </div>
        )
    }

    if (!event) {
        return (
            <div className='mt-28 w-full grid place-items-center'>
                <p>No event found</p>
            </div>
        )
    };

    return (
        <section className='p-6'>
            <h3 className='text-2xl font-semibold'>{event.title}</h3>
            <p>Category: {event.category}</p>
            <p>Description: {event.description}</p>
            <p>Location: {event.location}</p>
            <p>Organizer: {event.organizer}</p>
            <p>Pet allowed: {event.petsAllowed ? 'Yes' : 'No'}</p>
            <p>Date: {event.date}{' '}{event.time}</p>
        </section>
    )
}

export default Event;
