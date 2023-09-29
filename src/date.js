import { formatDistanceToNowStrict, parseISO } from 'date-fns';

export default function formatDate(date){
    return formatDistanceToNowStrict(parseISO(date));
}
