import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer g9UplxpkeKzdrEgyh3MHZEu8UhfmMde40whdKXh8Zf1v89NohjYZCHEWEVNKBFI7qCcNZGAQWcietA0_VPSGqla9R0Fh1UYw03jUwAE0VeRhv_8ppN_2gpFhmnfdXnYx'
    }
});