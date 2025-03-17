// TODO: Create an interface for the Candidate objects returned by the API

interface Candidate {
    login: string;
    name: string;
    location: string;
    email: string;
    company: string;
    bio: string;
    avatar_url: string;
}
export default Candidate;