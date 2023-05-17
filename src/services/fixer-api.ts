import client from 'services/http';

/*
{
  "date": "2023-05-16",
  "info": {
    "rate": 30.897596,
    "timestamp": 1684279624
  },
  "query": {
    "amount": 5,
    "from": "USD",
    "to": "EGP"
  },
  "result": 154.48798,
  "success": true
}
*/

export const convert = async (from: string, to: string, amount: number) => {
  try {
    const data = await client.get(
      `/convert?from=${from}&to=${to}&amount=${amount}`,
    );

    // const data = {
    //   date: '2023-05-16',
    //   info: {
    //     rate: 30.897596,
    //     timestamp: 1684279624,
    //   },
    //   query: {
    //     amount: 5,
    //     from: 'USD',
    //     to: 'EGP',
    //   },
    //   result: 154.48798,
    //   success: true,
    // };
    return data as {};
  } catch (error) {
    throw error;
  }
};

export type Currency = { name: string; value: string };

// const data = [
//   {
//     value: 'AED',
//     name: 'United Arab Emirates Dirham',
//   },
//   {
//     value: 'AFN',
//     name: 'Afghan Afghani',
//   },
//   {
//     value: 'ALL',
//     name: 'Albanian Lek',
//   },
//   {
//     value: 'AMD',
//     name: 'Armenian Dram',
//   },
//   {
//     value: 'ANG',
//     name: 'Netherlands Antillean Guilder',
//   },
//   {
//     value: 'AOA',
//     name: 'Angolan Kwanza',
//   },
//   {
//     value: 'ARS',
//     name: 'Argentine Peso',
//   },
//   {
//     value: 'AUD',
//     name: 'Australian Dollar',
//   },
//   {
//     value: 'AWG',
//     name: 'Aruban Florin',
//   },
//   {
//     value: 'AZN',
//     name: 'Azerbaijani Manat',
//   },
//   {
//     value: 'BAM',
//     name: 'Bosnia-Herzegovina Convertible Mark',
//   },
//   {
//     value: 'BBD',
//     name: 'Barbadian Dollar',
//   },
//   {
//     value: 'BDT',
//     name: 'Bangladeshi Taka',
//   },
//   {
//     value: 'BGN',
//     name: 'Bulgarian Lev',
//   },
//   {
//     value: 'BHD',
//     name: 'Bahraini Dinar',
//   },
//   {
//     value: 'BIF',
//     name: 'Burundian Franc',
//   },
//   {
//     value: 'BMD',
//     name: 'Bermudan Dollar',
//   },
//   {
//     value: 'BND',
//     name: 'Brunei Dollar',
//   },
//   {
//     value: 'BOB',
//     name: 'Bolivian Boliviano',
//   },
//   {
//     value: 'BRL',
//     name: 'Brazilian Real',
//   },
//   {
//     value: 'BSD',
//     name: 'Bahamian Dollar',
//   },
//   {
//     value: 'BTC',
//     name: 'Bitcoin',
//   },
//   {
//     value: 'BTN',
//     name: 'Bhutanese Ngultrum',
//   },
//   {
//     value: 'BWP',
//     name: 'Botswanan Pula',
//   },
//   {
//     value: 'BYN',
//     name: 'New Belarusian Ruble',
//   },
//   {
//     value: 'BYR',
//     name: 'Belarusian Ruble',
//   },
//   {
//     value: 'BZD',
//     name: 'Belize Dollar',
//   },
//   {
//     value: 'CAD',
//     name: 'Canadian Dollar',
//   },
//   {
//     value: 'CDF',
//     name: 'Congolese Franc',
//   },
//   {
//     value: 'CHF',
//     name: 'Swiss Franc',
//   },
//   {
//     value: 'CLF',
//     name: 'Chilean Unit of Account (UF)',
//   },
//   {
//     value: 'CLP',
//     name: 'Chilean Peso',
//   },
//   {
//     value: 'CNY',
//     name: 'Chinese Yuan',
//   },
//   {
//     value: 'COP',
//     name: 'Colombian Peso',
//   },
//   {
//     value: 'CRC',
//     name: 'Costa Rican Colón',
//   },
//   {
//     value: 'CUC',
//     name: 'Cuban Convertible Peso',
//   },
//   {
//     value: 'CUP',
//     name: 'Cuban Peso',
//   },
//   {
//     value: 'CVE',
//     name: 'Cape Verdean Escudo',
//   },
//   {
//     value: 'CZK',
//     name: 'Czech Republic Koruna',
//   },
//   {
//     value: 'DJF',
//     name: 'Djiboutian Franc',
//   },
//   {
//     value: 'DKK',
//     name: 'Danish Krone',
//   },
//   {
//     value: 'DOP',
//     name: 'Dominican Peso',
//   },
//   {
//     value: 'DZD',
//     name: 'Algerian Dinar',
//   },
//   {
//     value: 'EGP',
//     name: 'Egyptian Pound',
//   },
//   {
//     value: 'ERN',
//     name: 'Eritrean Nakfa',
//   },
//   {
//     value: 'ETB',
//     name: 'Ethiopian Birr',
//   },
//   {
//     value: 'EUR',
//     name: 'Euro',
//   },
//   {
//     value: 'FJD',
//     name: 'Fijian Dollar',
//   },
//   {
//     value: 'FKP',
//     name: 'Falkland Islands Pound',
//   },
//   {
//     value: 'GBP',
//     name: 'British Pound Sterling',
//   },
//   {
//     value: 'GEL',
//     name: 'Georgian Lari',
//   },
//   {
//     value: 'GGP',
//     name: 'Guernsey Pound',
//   },
//   {
//     value: 'GHS',
//     name: 'Ghanaian Cedi',
//   },
//   {
//     value: 'GIP',
//     name: 'Gibraltar Pound',
//   },
//   {
//     value: 'GMD',
//     name: 'Gambian Dalasi',
//   },
//   {
//     value: 'GNF',
//     name: 'Guinean Franc',
//   },
//   {
//     value: 'GTQ',
//     name: 'Guatemalan Quetzal',
//   },
//   {
//     value: 'GYD',
//     name: 'Guyanaese Dollar',
//   },
//   {
//     value: 'HKD',
//     name: 'Hong Kong Dollar',
//   },
//   {
//     value: 'HNL',
//     name: 'Honduran Lempira',
//   },
//   {
//     value: 'HRK',
//     name: 'Croatian Kuna',
//   },
//   {
//     value: 'HTG',
//     name: 'Haitian Gourde',
//   },
//   {
//     value: 'HUF',
//     name: 'Hungarian Forint',
//   },
//   {
//     value: 'IDR',
//     name: 'Indonesian Rupiah',
//   },
//   {
//     value: 'ILS',
//     name: 'Israeli New Sheqel',
//   },
//   {
//     value: 'IMP',
//     name: 'Manx pound',
//   },
//   {
//     value: 'INR',
//     name: 'Indian Rupee',
//   },
//   {
//     value: 'IQD',
//     name: 'Iraqi Dinar',
//   },
//   {
//     value: 'IRR',
//     name: 'Iranian Rial',
//   },
//   {
//     value: 'ISK',
//     name: 'Icelandic Króna',
//   },
//   {
//     value: 'JEP',
//     name: 'Jersey Pound',
//   },
//   {
//     value: 'JMD',
//     name: 'Jamaican Dollar',
//   },
//   {
//     value: 'JOD',
//     name: 'Jordanian Dinar',
//   },
//   {
//     value: 'JPY',
//     name: 'Japanese Yen',
//   },
//   {
//     value: 'KES',
//     name: 'Kenyan Shilling',
//   },
//   {
//     value: 'KGS',
//     name: 'Kyrgystani Som',
//   },
//   {
//     value: 'KHR',
//     name: 'Cambodian Riel',
//   },
//   {
//     value: 'KMF',
//     name: 'Comorian Franc',
//   },
//   {
//     value: 'KPW',
//     name: 'North Korean Won',
//   },
//   {
//     value: 'KRW',
//     name: 'South Korean Won',
//   },
//   {
//     value: 'KWD',
//     name: 'Kuwaiti Dinar',
//   },
//   {
//     value: 'KYD',
//     name: 'Cayman Islands Dollar',
//   },
//   {
//     value: 'KZT',
//     name: 'Kazakhstani Tenge',
//   },
//   {
//     value: 'LAK',
//     name: 'Laotian Kip',
//   },
//   {
//     value: 'LBP',
//     name: 'Lebanese Pound',
//   },
//   {
//     value: 'LKR',
//     name: 'Sri Lankan Rupee',
//   },
//   {
//     value: 'LRD',
//     name: 'Liberian Dollar',
//   },
//   {
//     value: 'LSL',
//     name: 'Lesotho Loti',
//   },
//   {
//     value: 'LTL',
//     name: 'Lithuanian Litas',
//   },
//   {
//     value: 'LVL',
//     name: 'Latvian Lats',
//   },
//   {
//     value: 'LYD',
//     name: 'Libyan Dinar',
//   },
//   {
//     value: 'MAD',
//     name: 'Moroccan Dirham',
//   },
//   {
//     value: 'MDL',
//     name: 'Moldovan Leu',
//   },
//   {
//     value: 'MGA',
//     name: 'Malagasy Ariary',
//   },
//   {
//     value: 'MKD',
//     name: 'Macedonian Denar',
//   },
//   {
//     value: 'MMK',
//     name: 'Myanma Kyat',
//   },
//   {
//     value: 'MNT',
//     name: 'Mongolian Tugrik',
//   },
//   {
//     value: 'MOP',
//     name: 'Macanese Pataca',
//   },
//   {
//     value: 'MRO',
//     name: 'Mauritanian Ouguiya',
//   },
//   {
//     value: 'MUR',
//     name: 'Mauritian Rupee',
//   },
//   {
//     value: 'MVR',
//     name: 'Maldivian Rufiyaa',
//   },
//   {
//     value: 'MWK',
//     name: 'Malawian Kwacha',
//   },
//   {
//     value: 'MXN',
//     name: 'Mexican Peso',
//   },
//   {
//     value: 'MYR',
//     name: 'Malaysian Ringgit',
//   },
//   {
//     value: 'MZN',
//     name: 'Mozambican Metical',
//   },
//   {
//     value: 'NAD',
//     name: 'Namibian Dollar',
//   },
//   {
//     value: 'NGN',
//     name: 'Nigerian Naira',
//   },
//   {
//     value: 'NIO',
//     name: 'Nicaraguan Córdoba',
//   },
//   {
//     value: 'NOK',
//     name: 'Norwegian Krone',
//   },
//   {
//     value: 'NPR',
//     name: 'Nepalese Rupee',
//   },
//   {
//     value: 'NZD',
//     name: 'New Zealand Dollar',
//   },
//   {
//     value: 'OMR',
//     name: 'Omani Rial',
//   },
//   {
//     value: 'PAB',
//     name: 'Panamanian Balboa',
//   },
//   {
//     value: 'PEN',
//     name: 'Peruvian Nuevo Sol',
//   },
//   {
//     value: 'PGK',
//     name: 'Papua New Guinean Kina',
//   },
//   {
//     value: 'PHP',
//     name: 'Philippine Peso',
//   },
//   {
//     value: 'PKR',
//     name: 'Pakistani Rupee',
//   },
//   {
//     value: 'PLN',
//     name: 'Polish Zloty',
//   },
//   {
//     value: 'PYG',
//     name: 'Paraguayan Guarani',
//   },
//   {
//     value: 'QAR',
//     name: 'Qatari Rial',
//   },
//   {
//     value: 'RON',
//     name: 'Romanian Leu',
//   },
//   {
//     value: 'RSD',
//     name: 'Serbian Dinar',
//   },
//   {
//     value: 'RUB',
//     name: 'Russian Ruble',
//   },
//   {
//     value: 'RWF',
//     name: 'Rwandan Franc',
//   },
//   {
//     value: 'SAR',
//     name: 'Saudi Riyal',
//   },
//   {
//     value: 'SBD',
//     name: 'Solomon Islands Dollar',
//   },
//   {
//     value: 'SCR',
//     name: 'Seychellois Rupee',
//   },
//   {
//     value: 'SDG',
//     name: 'Sudanese Pound',
//   },
//   {
//     value: 'SEK',
//     name: 'Swedish Krona',
//   },
//   {
//     value: 'SGD',
//     name: 'Singapore Dollar',
//   },
//   {
//     value: 'SHP',
//     name: 'Saint Helena Pound',
//   },
//   {
//     value: 'SLE',
//     name: 'Sierra Leonean Leone',
//   },
//   {
//     value: 'SLL',
//     name: 'Sierra Leonean Leone',
//   },
//   {
//     value: 'SOS',
//     name: 'Somali Shilling',
//   },
//   {
//     value: 'SRD',
//     name: 'Surinamese Dollar',
//   },
//   {
//     value: 'STD',
//     name: 'São Tomé and Príncipe Dobra',
//   },
//   {
//     value: 'SVC',
//     name: 'Salvadoran Colón',
//   },
//   {
//     value: 'SYP',
//     name: 'Syrian Pound',
//   },
//   {
//     value: 'SZL',
//     name: 'Swazi Lilangeni',
//   },
//   {
//     value: 'THB',
//     name: 'Thai Baht',
//   },
//   {
//     value: 'TJS',
//     name: 'Tajikistani Somoni',
//   },
//   {
//     value: 'TMT',
//     name: 'Turkmenistani Manat',
//   },
//   {
//     value: 'TND',
//     name: 'Tunisian Dinar',
//   },
//   {
//     value: 'TOP',
//     name: 'Tongan Paʻanga',
//   },
//   {
//     value: 'TRY',
//     name: 'Turkish Lira',
//   },
//   {
//     value: 'TTD',
//     name: 'Trinidad and Tobago Dollar',
//   },
//   {
//     value: 'TWD',
//     name: 'New Taiwan Dollar',
//   },
//   {
//     value: 'TZS',
//     name: 'Tanzanian Shilling',
//   },
//   {
//     value: 'UAH',
//     name: 'Ukrainian Hryvnia',
//   },
//   {
//     value: 'UGX',
//     name: 'Ugandan Shilling',
//   },
//   {
//     value: 'USD',
//     name: 'United States Dollar',
//   },
//   {
//     value: 'UYU',
//     name: 'Uruguayan Peso',
//   },
//   {
//     value: 'UZS',
//     name: 'Uzbekistan Som',
//   },
//   {
//     value: 'VEF',
//     name: 'Venezuelan Bolívar Fuerte',
//   },
//   {
//     value: 'VES',
//     name: 'Sovereign Bolivar',
//   },
//   {
//     value: 'VND',
//     name: 'Vietnamese Dong',
//   },
//   {
//     value: 'VUV',
//     name: 'Vanuatu Vatu',
//   },
//   {
//     value: 'WST',
//     name: 'Samoan Tala',
//   },
//   {
//     value: 'XAF',
//     name: 'CFA Franc BEAC',
//   },
//   {
//     value: 'XAG',
//     name: 'Silver (troy ounce)',
//   },
//   {
//     value: 'XAU',
//     name: 'Gold (troy ounce)',
//   },
//   {
//     value: 'XCD',
//     name: 'East Caribbean Dollar',
//   },
//   {
//     value: 'XDR',
//     name: 'Special Drawing Rights',
//   },
//   {
//     value: 'XOF',
//     name: 'CFA Franc BCEAO',
//   },
//   {
//     value: 'XPF',
//     name: 'CFP Franc',
//   },
//   {
//     value: 'YER',
//     name: 'Yemeni Rial',
//   },
//   {
//     value: 'ZAR',
//     name: 'South African Rand',
//   },
//   {
//     value: 'ZMK',
//     name: 'Zambian Kwacha (pre-2013)',
//   },
//   {
//     value: 'ZMW',
//     name: 'Zambian Kwacha',
//   },
//   {
//     value: 'ZWL',
//     name: 'Zimbabwean Dollar',
//   },
// ];

// const latestValues = {
//   base: 'USD',
//   date: '2023-05-16',
//   rates: {
//     AED: 3.672202,
//     AUD: 1.50174,
//     BHD: 0.376984,
//     EGP: 30.904297,
//     EUR: 0.92015,
//     GBP: 0.80089,
//     KWD: 0.30701,
//     QAR: 3.64102,
//     SAR: 3.75019,
//   },
//   success: true,
//   timestamp: 1684263604,
// };

export const listAllCurrencies = async () => {
  try {
    const data = await client.get<any, any>('/symbols');
    console.dir(
      Object.entries(data.symbols).map(
        ([value, name]) =>
          ({
            value,
            name,
          } as Currency),
      ),
    );
    return Object.entries(data.symbols).map(
      ([value, name]) =>
        ({
          value,
          name,
        } as Currency),
    );
    // return data;
  } catch (error) {
    throw error;
  }
};

export const latest = async (
  symbols: string = 'AED,GBP,USD,EUR,KWD,AUD,SAR,BHD,QAR',
  base: string = 'EGP',
) => {
  try {
    const data = await client.get<any, any>(
      `/latest?symbols=${symbols}&base=${base}`,
    );

    // const data = latestValues;
    return {
      ...data,
      ratesConverted: Object.entries(data.rates).map(([value, rate]) => ({
        value,
        rate,
      })),
    };
  } catch (error) {
    throw error;
  }
};

const timeseriesMock: { [key: string]: any; rates: { [key: string]: any } } = {
  base: 'USD',
  end_date: '2023-05-16',
  rates: {
    '2023-05-01': {
      EGP: 31.051602,
    },
    '2023-05-02': {
      EGP: 30.911974,
    },
    '2023-05-03': {
      EGP: 30.952399,
    },
    '2023-05-04': {
      EGP: 30.9503,
    },
    '2023-05-05': {
      EGP: 30.274304,
    },
    '2023-05-06': {
      EGP: 30.271596,
    },
    '2023-05-07': {
      EGP: 30.804601,
    },
    '2023-05-08': {
      EGP: 30.904102,
    },
    '2023-05-09': {
      EGP: 30.901502,
    },
    '2023-05-10': {
      EGP: 30.894403,
    },
    '2023-05-11': {
      EGP: 30.900203,
    },
    '2023-05-12': {
      EGP: 30.647653,
    },
    '2023-05-13': {
      EGP: 30.647653,
    },
    '2023-05-14': {
      EGP: 30.887703,
    },
    '2023-05-15': {
      EGP: 30.902302,
    },
    '2023-05-16': {
      EGP: 30.9053,
    },
  },
  start_date: '2023-05-01',
  success: true,
  timeseries: true,
};

export const timeseries = async (
  startDate: string = '2023-05-01',
  endDate: string = '2023-05-16',
  from: string = 'USD',
  to: string = 'EGP', // ex: EGP,USD,EUR
) => {
  try {
    // const data = await client.get(
    //   `fixer/timeseries?start_date=${startDate}&end_date=${endDate}&base=${from}&symbols=${to}`,
    // );

    const data = timeseriesMock;
    return {
      ...data,
      series: Object.entries(data.rates).map(([date, rate]) => [
        date,
        rate[to],
        to,
      ]),
    };
  } catch (error) {
    throw error;
  }
};
