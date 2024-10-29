import { QueryFunction, queryOptions, useQuery, UseQueryResult } from "@tanstack/react-query"
import axios from "axios";
import { Event } from "../types";

const fetchEvents: QueryFunction<Event[]> = async function() {
    let respone = await axios.get(`https://my-json-server.typicode.com/Code-Pop/Touring-Vue-Router/events`);
    return respone.data;
}


export function eventsQueryOptions(options: object) {
    return queryOptions({
        queryKey: ['events'],
        queryFn: fetchEvents,
        ...options
    })
}

export function useEvent(eventId: string): any {
    return useQuery(
        eventsQueryOptions({
            select: (events: Event[]) => {
                return events.find(e => String(e.id) === eventId);
            }
        })
    );
}