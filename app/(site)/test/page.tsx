import {client} from '@/utils/configSanity';

interface IBlog{
    _id: string,
    title:string,
    description: any,
    published_at: string
}

async function getData() {
    const query = "*[_type == 'blog']";
    const data = await client.fetch(query);
    return data as IBlog[];
}

const page = async () => {
    const data = (await getData()) as IBlog[];
    console.log(data);
    
    
  return (
    <div>page</div>
  )
}

export default page