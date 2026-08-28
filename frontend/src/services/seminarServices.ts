import {supabase} from '../lib/supabaseClient'


export interface FetchSeminarProps {
    searchQuery: string
}

export const normalizeQuery = (query: string) => {
    return query ? query.trim().toLowerCase() : null;
}

export const fetchSeminars = async (searchQuery: string) => {
    try {
        let query = supabase
            .from('seminars')
            .select('*', { count: 'exact' })
            .order('date', { ascending: false })
        // request seminar information
        const normalizedQuery = normalizeQuery(searchQuery)
        if (normalizedQuery) {
            query = query.ilike('title', `%${normalizedQuery}%`);
        }
        
        const { data, error, count } = await query;
        if (error) {
            throw new Error(error.message)
        }
        console.log('seminar data: ',data)
        console.log('seminar count: ',count)

        return {data: data.map((item) => ({...item, action: 'Watch'})), count}
    } catch (err) {
        console.error('Error fetching seminars:', err)
        return null
    }
}
