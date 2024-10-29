import React, { FC, useEffect } from 'react';
import styles from './Events.module.css';
import { useQuery } from '@tanstack/react-query';
import { eventsQueryOptions } from '../../../queries/events-query';
import { Event } from '../../../types';
import { Link, useSearchParams } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

interface EventsProps {}

const Events: FC<EventsProps> = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const searchTerm = searchParams.get('q') || '';
    const isPetsAllowed = searchParams.get('filter') === 'pets allowed';
    
    // events query
    const {isPending, error, data: events} = useQuery(eventsQueryOptions({}));
    
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
    
    const filteredEvents = events
    .filter(e => new RegExp(searchTerm).test(e.title)) // search term filter
    .filter(e => {
        if (isPetsAllowed) {
            return e.petsAllowed === true;
        } else return true;
    }); // pets allowed filter


    return (
        <section className='p-6'>
            <ul className='flex flex-col gap-4'>
                {
                    (filteredEvents as Event[]).map(event => {
                        return (
                            <li key={event.id}>
                                <Link to={`events/${event.id}`} className='bg-white border border-zinc-400 p-4 rounded-lg block'>
                                    <p>Title: {event.title}</p>
                                    <p>Category: {event.category}</p>
                                    <p>Date: {event.date}</p>
                                    <p>Location: {event.location}</p>
                                </Link>
                            </li>
                        );
                    })
                }
            </ul>
        </section>
    );
};

export default Events;
