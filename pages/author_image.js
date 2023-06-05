import axios from 'axios';
import GoogleAPIKEY from '../googleConfig.json';

export default async function getServerSideProps(context) {
  const { keyword } = context.query;

  try {
    const response = await axios.get(
      `https://www.googleapis.com/customsearch/v1?key=${GoogleAPIKEY}&cx=YOUR_CUSTOM_SEARCH_ENGINE_ID&q=${keyword}&searchType=image`
    );

    const imageLink = response.data.items[0].link;

    return {
      props: {
        imageLink,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        error: 'Unable to fetch image link',
      },
    };
  }
}
