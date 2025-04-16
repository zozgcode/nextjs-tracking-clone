import { Package } from '@/utils/types';

export const mockPackages: Package[] = [
  {
    package_id: 'PKG001',
    sender: {
      name: 'John Doe',
      address: '123 Main St, Springfield, IL, 62701',
      contact_number: '555-1234',
      email: 'sender@example.com'
    },
    recipient: {
      name: 'Jane Smith',
      address: '456 Elm St, Shelbyville, IL, 62565',
      contact_number: '555-5678',
      email: 'recipient@example.com'
    },
    tracking_number: 'sample',
    package_details: {
      weight_kg: 2.5,
      dimensions_cm: {
        length: 30,
        width: 20,
        height: 15
      },
      courier: 'Fedex',
      packages: 'Books',
      quantity: '1',
      paymentMode: 'Cash',
      origin: 'Springfield, IL',
      destination: 'Shelbyville, IL',
      comment: 'Handle with care',
      mode: 'Road',
      value_usd: 50.0
    },
    package_received_date: '2024-05-23',
    package_received_time: '06:09:00',
    in_transit_date: '2024-05-23',
    in_transit_time: '06:10:00',
    out_for_delivery_date: '2024-05-23',
    out_for_delivery_time: '06:11:00',
    on_hold_date: '',
    on_hold_time: '',
    estimated_delivery_date: '2024-05-23',
    estimated_delivery_time: '06:13:00'
  },
  {
    package_id: 'PKG002',
    sender: {
      name: 'James Hollet',
      address: 'California Department',
      contact_number: '304-303-9843',
      email: 'jameshollet500@gmail.com'
    },
    recipient: {
      name: 'Brent M. McKinney',
      address: '31836 SW Country View Lane Wilsonville Oregon',
      contact_number: '505****',
      email: '*****'
    },
    tracking_number: 'Fedex/USA/24/0025631',
    package_details: {
      weight_kg: 10,
      dimensions_cm: {
        length: 30,
        width: 20,
        height: 15
      },
      courier: 'Fedex',
      packages: 'Briefcase',
      quantity: '1',
      paymentMode: 'Cash',
      origin: 'California Department',
      destination: 'Wilsonville OR',
      comment: 'Handle with care',
      status: 'Out for delivery',
      mode: 'Road',
      value_usd: 50.0
    },
    // Y-M-D
    package_received_date: '2024-07-26',
    package_received_time: '09:30:00',
    in_transit_date: '2024-07-26',
    in_transit_time: '09:40:00',
    out_for_delivery_date: '2024-08-27',
    out_for_delivery_time: '10:00:00',
    on_hold_date: '2024-08-27',
    on_hold_time: '18:30:00',
    estimated_delivery_date: '',
    estimated_delivery_time: ''
  },
  {
    package_id: 'PKG003',
    sender: {
      name: 'Royal Dubai Jewelries',
      address: '7146 gaya ground sport city rd',
      contact_number: '975-***-****',
      email: 'jonathanmarshfred@gmail.com'
    },
    recipient: {
      name: 'Jonathan Marsh',
      address: '2053 Rising Hill Dr, Norman, OK, 73071',
      contact_number: '989-***-****',
      email: 'jonathanmarshfred@gmail.com'
    },
    tracking_number: 'Fedex/USA/24/0025632',
    package_details: {
      weight_kg: 10,
      dimensions_cm: {
        length: 30,
        width: 20,
        height: 15
      },
      courier: 'Fedex',
      packages: 'Gold',
      quantity: '1',
      paymentMode: 'Wire',
      origin: 'Dubai',
      destination: 'Oklahoma ',
      comment: 'Handle with care',
      status: 'Out for delivery',
      mode: 'Road',
      value_usd: 50.0
    },
    // Y-M-D
    package_received_date: '2024-08-03',
    package_received_time: '12:00:00',
    in_transit_date: '2024-08-21',
    in_transit_time: '14:00:00',
    out_for_delivery_date: '2024-08-22',
    out_for_delivery_time: '11:00:00',
    on_hold_date: '',
    on_hold_time: '',
    estimated_delivery_date: '2024-08-24',
    estimated_delivery_time: '12:00:00',
    pickup_date: '2024-08-24',
    pickup_time: '15:00:00'
  },
  {
    package_id: 'PKG004',
    sender: {
      name: 'Cindy Wheeler',
      address: 'California',
      contact_number: '+1 (740) 552‑3830',
      email: 'cindywheeler610@gmail.com'
    },
    recipient: {
      name: 'Ricardo Ivan Mercado',
      address: '4 Rue Pierre Brossoleite Appartement 3, 76770 Malauna. Rouen Francia',
      contact_number: '***-***-****',
      email: '******'
    },
    tracking_number: 'Fedex/USA/24/0025633',
    package_details: {
      weight_kg: 10,
      dimensions_cm: {
        length: 30,
        width: 20,
        height: 15
      },
      courier: 'Fedex',
      packages: 'Consignment Box',
      quantity: '1',
      paymentMode: 'Cash',
      origin: 'California',
      destination: 'Decatur,Ga',
      comment: 'Handle with care',
      status: 'Out for delivery',
      mode: 'Road',
      value_usd: 50.0
    },
    // Y-M-D
    package_received_date: '2024-08-03',
    package_received_time: '12:00:00',
    in_transit_date: '2024-08-21',
    in_transit_time: '14:00:00',
    out_for_delivery_date: '2024-08-22',
    out_for_delivery_time: '11:00:00',
    on_hold_date: '2024-09-20',
    on_hold_time: '09:00:00',
    on_hold_desc: 'Votre colis est bien arrivé en France et vous le fera livrer à votre adresse à Paris Vous devrez déposer 800 au FMI pour que le paquet puisse vous être remis.',
    estimated_delivery_date: '',
    estimated_delivery_time: '',
    pickup_date: '2024-09-27',
    pickup_time: '15:00:00'
  },
  {
    package_id: 'PKG005',
    sender: {
      name: 'Mark Sharon',
      address: '519 Mcmillian Iota Apt 17 70503',
      contact_number: '+1 (760)-377-6613',
      email: 'richardmattew@gmail.com'
    },
    recipient: {
      name: 'Terrance Lenney',
      address: '19101 Maries Road 530 Rolla, MO 65401',
      contact_number: '***-***-****',
      email: 'elizabirthwilliams92@gmail.com'
    },
    tracking_number: 'Fedex/USA/24/0025634',
    package_details: {
      weight_kg: 10,
      dimensions_cm: {
        length: 30,
        width: 20,
        height: 15
      },
      courier: 'Fedex',
      packages: 'Briefcase',
      quantity: '1',
      paymentMode: 'Cash',
      origin: 'Texas',
      destination: 'Missouri',
      comment: 'Handle with care',
      status: 'Out for delivery',
      mode: 'Road',
      value_usd: 50.0
    },
    // Y-M-D
    package_received_date: '2024-09-16',
    package_received_time: '12:00:00',
    in_transit_date: '2024-09-21',
    in_transit_time: '14:00:00',
    out_for_delivery_date: '2024-09-30',
    out_for_delivery_time: '11:00:00',
    on_hold_date: '',
    on_hold_time: '',
    estimated_delivery_date: '2024-10-02',
    estimated_delivery_time: '09:00:00',
    pickup_date: '2024-10-03',
    pickup_time: '8:30:00'
  },
  {
    package_id: 'PKG006',
    sender: {
      name: 'Susan Queen',
      address: 'Hicksville, OH 43526',
      contact_number: '+1 (760)-377-6613',
      email: 'agencesaarp@gmail.com'
    },
    recipient: {
      name: 'Mark Blanshan',
      address: '521 McPherson st Boone Iowa  50036',
      contact_number: '***-***-****',
      email: '******'
    },
    tracking_number: 'Fedex/USA/24/fq346r83r44r938r398534984',
    package_details: {
      weight_kg: 10,
      dimensions_cm: {
        length: 30,
        width: 20,
        height: 15
      },
      courier: 'Fedex',
      packages: 'Money',
      quantity: '1',
      paymentMode: 'Cash',
      origin: 'Ohio',
      destination: 'Boone, Iowa',
      comment: 'Handle with care',
      status: 'Out for delivery',
      mode: 'Road',
      value_usd: 50.0
    },
    // Y-M-D
    package_received_date: '2024-09-20',
    package_received_time: '12:00:00',
    in_transit_date: '2024-09-21',
    in_transit_time: '08:00:00',
    out_for_delivery_date: '',
    out_for_delivery_time: '',
    on_hold_date: '',
    on_hold_time: '',
    estimated_delivery_date: '2024-10-02',
    estimated_delivery_time: '09:00:00',
    pickup_date: '2024-11-04',
    pickup_time: '11:30:00'
  },
  {
    package_id: 'PKG007',
    sender: {
      name: 'Peter Cole',
      address: '7803 South Irvington Ave, Tulsa, Oklahoma 74136',
      contact_number: '***-****-****',
      email: '******'
    },
    recipient: {
      name: 'Gustav Jan-Erik Bjon',
      address: 'Harju 55-211612 Tallinn, Estonia',
      contact_number: '***-****-****',
      email: '******'
    },
    tracking_number: 'Fedex/USA/24/0025637',
    package_details: {
      weight_kg: 10,
      dimensions_cm: {
        length: 30,
        width: 20,
        height: 15
      },
      courier: 'Fedex',
      packages: 'Money Box',
      quantity: '1',
      paymentMode: 'Cash',
      origin: 'Oklahoma',
      destination: 'Tallinn, Estonia',
      comment: 'Handle with care',
      status: 'Out for delivery',
      mode: 'Road',
      value_usd: 50.0
    },
    // Y-M-D
    package_received_date: '2024-10-17',
    package_received_time: '09:00:00',
    in_transit_date: '2024-10-17',
    in_transit_time: '11:00:00',
    out_for_delivery_date: '',
    out_for_delivery_time: '',
    on_hold_date: '2024-10-18',
    on_hold_time: '12:15:00',
    estimated_delivery_date: '2024-10-19',
    estimated_delivery_time: '15:00:00'
  },
  {
    package_id: 'PKG008',
    sender: {
      name: 'IDA GRANT',
      address: 'Fayetteville, Arkansas ',
      contact_number: '***-****-****',
      email: 'idagrant2024@gmail.com'
    },
    recipient: {
      name: 'Beth Cutrell ',
      address: '1215 S. Brady St. Accita Indiana 47918',
      contact_number: '***-****-****',
      email: 'bethcutrell@gmail.com'
    },
    tracking_number: 'Fedex/USA/24/0025638',
    package_details: {
      weight_kg: 10,
      dimensions_cm: {
        length: 30,
        width: 20,
        height: 15
      },
      courier: 'Fedex',
      packages: 'Brown Envelope',
      quantity: '1',
      paymentMode: 'BTC',
      origin: 'Arkansas, USA',
      destination: '1215 S. Brady St. Accita Indiana 47918',
      comment: 'Handle with care',
      status: 'Out for delivery',
      mode: 'Road',
      value_usd: 50.0
    },
    // Y-M-D
    package_received_date: '2024-12-04',
    package_received_time: '09:00:00',
    in_transit_date: '2024-12-08',
    in_transit_time: '11:00:00',
    out_for_delivery_date: '2024-12-08',
    out_for_delivery_time: '12:00:00',
    on_hold_date: '',
    on_hold_time: '',
    estimated_delivery_date: '2024-12-09',
    estimated_delivery_time: '15:00:00'
  },
  {
    package_id: 'PKG009',
    sender: {
      name: 'Health and Human Services Veteran Affairs.',
      address: 'Fayetteville, Arkansas ',
      contact_number: '253-500-6070',
      email: 'attorney.david.anderson.010@gmail.com'
    },
    recipient: {
      name: 'Harry E Meyer',
      address: 'Zolfo Springs,  3014 Spruce Street Fl 33890, Florida',
      contact_number: '863-8325-248',
      email: 'meyerh419@gmail.com'
    },
    tracking_number: 'Fedex/USA/24/0025639',
    package_details: {
      weight_kg: 10,
      dimensions_cm: {
        length: 30,
        width: 20,
        height: 15
      },
      courier: 'Fedex',
      packages: ' FedEx Medium Box',
      quantity: '1',
      paymentMode: 'Cash',
      origin: 'Washington, USA',
      destination: 'Zolfo Springs, Florida',
      comment: 'Handle with care',
      status: 'Out for delivery',
      mode: 'Road',
      value_usd: 50.0
    },
    // Y-M-D
    package_received_date: '2024-12-16',
    package_received_time: '12:00:00',
    in_transit_date: '2024-12-16',
    in_transit_time: '13:00:00',
    out_for_delivery_date: '',
    out_for_delivery_time: '',
    on_hold_date: '2024-12-27',
    on_hold_time: '10:00:00',
    estimated_delivery_date: '',
    estimated_delivery_time: ''
  },
  {
    package_id: 'PKG010',
    sender: {
      name: 'Probate Court (James Fletcher)',
      address: 'San Antonio, Tx, USA',
      contact_number: '346-648-8430',
      email: 'jimgrah9@gmail.com'
    },
    recipient: {
      name: 'Lynn Nolan Bishop',
      address: '67 W 300 N, Manti UT 84642',
      contact_number: '***-***-***',
      email: '******'
    },
    tracking_number: 'Fedex/USA/24/0025640',
    package_details: {
      weight_kg: 10,
      dimensions_cm: {
        length: 30,
        width: 20,
        height: 15
      },
      courier: 'Fedex',
      packages: 'Gold',
      quantity: '5',
      paymentMode: 'Cash',
      origin: 'San Antonio, Tx, USA',
      destination: 'Utah, USA',
      comment: 'Handle with care',
      status: 'Out for delivery',
      mode: 'Road',
      value_usd: 50.0
    },
    // Y-M-D
    package_received_date: '2025-01-25',
    package_received_time: '08:00:00',
    in_transit_date: '2025-01-26',
    in_transit_time: '08:00:00',
    out_for_delivery_date: '2025-01-26',
    out_for_delivery_time: '13:00:00',
    on_hold_date: '',
    on_hold_time: '',
    estimated_delivery_date: '2025-01-28',
    estimated_delivery_time: '09:00:00'
  },
  {
    package_id: 'PKG011',
    sender: {
      name: 'US ARMY (Sergeant JANICE retirement funds)',
      address: 'Forte Hunter ligget California',
      contact_number: '+1-240-903-0063',
      email: 'brookwoodjanice60@gmail.com'
    },
    recipient: {
      name: 'KALAULI ALEXANDER',
      address: '656 AUEAIOLIMU ST HONOLULU, HI 96813',
      contact_number: '+1-808-563-6454',
      email: '******'
    },
    tracking_number: 'Fedex/USA/24/0025641',
    package_details: {
      weight_kg: 10,
      dimensions_cm: {
        length: 30,
        width: 20,
        height: 15
      },
      courier: 'Fedex',
      packages: 'Bag of Money',
      quantity: '1',
      paymentMode: 'Cashapp',
      origin: 'California, USA',
      destination: 'Hawaii, USA',
      comment: 'Handle with care',
      status: 'Out for delivery',
      mode: 'Road',
      value_usd: 50.0
    },
    // Y-M-D
    package_received_date: '2025-01-31',
    package_received_time: '11:12:00',
    in_transit_date: '2025-02-01',
    in_transit_time: '08:00:00',
    out_for_delivery_date: '2025-02-01',
    out_for_delivery_time: '13:00:00',
    on_hold_date: '',
    on_hold_time: '',
    estimated_delivery_date: '2025-02-05',
    estimated_delivery_time: '09:00:00'
  },
  {
    package_id: 'PKG012',
    sender: {
      name: 'Old Mutual Insurance Company',
      address: 'Johannesburg South African',
      contact_number: '+1-213-809-4188',
      email: 'insuranceafricaofficialgovernm@gmail.com'
    },
    recipient: {
      name: 'Marilyn Goldberg',
      address: '129 Lakeland Avenue Sayville NY 11782-1995',
      contact_number: '+1-***-***-****',
      email: 'wesleyhatton232@gmail.com'
    },
    tracking_number: 'Fedex/USA/24/0025642',
    package_details: {
      weight_kg: 10,
      dimensions_cm: {
        length: 30,
        width: 20,
        height: 15
      },
      courier: 'Fedex',
      packages: 'Briefcase',
      quantity: '2',
      paymentMode: 'Cash & houses keys',
      origin: 'USA',
      destination: '129 Lakeland Avenue Sayville NY 11782-1995',
      comment: 'Handle with care',
      status: 'Out for delivery',
      mode: 'Ship',
      value_usd: 50.0
    },
    // Y-M-D
    package_received_date: '2025-02-07',
    package_received_time: '09:12:00',
    in_transit_date: '2025-02-25',
    in_transit_time: '08:00:00',
    out_for_delivery_date: '2025-02-26',
    out_for_delivery_time: '13:00:00',
    on_hold_date: '',
    on_hold_time: '',
    estimated_delivery_date: '2025-03-03',
    estimated_delivery_time: '09:00:00'
  },
  {
    package_id: 'PKG013',
    sender: {
      name: 'Blinks Insurance Company',
      address: 'Miami, FL',
      contact_number: '+1-507-262-6200',
      email: '******'
    },
    recipient: {
      name: 'Tamara McKee',
      address: '18314 sw 135th Terrace Tualatin Oregon 97062',
      contact_number: '503****',
      email: 'Tami******gmail.com'
    },
    tracking_number: 'Fedex/USA/24/0025643',
    package_details: {
      weight_kg: 10,
      dimensions_cm: {
        length: 30,
        width: 20,
        height: 15
      },
      courier: 'Fedex',
      packages: 'Briefcase',
      quantity: '1',
      paymentMode: 'Cash App',
      origin: 'Portland',
      destination: 'Oregon USA',
      comment: 'Handle with care',
      status: 'Out for delivery',
      mode: 'Road',
      value_usd: 50.0
    },
    // Y-M-D
    package_received_date: '2025-02-22',
    package_received_time: '09:12:00',
    in_transit_date: '2025-02-23',
    in_transit_time: '08:00:00',
    out_for_delivery_date: '2025-02-23',
    out_for_delivery_time: '13:00:00',
    on_hold_date: '',
    on_hold_time: '',
    estimated_delivery_date: '2025-02-27',
    estimated_delivery_time: '19:00:00'
  },
  {
    package_id: 'PKG014',
    sender: {
      name: 'PCH',
      address: '6901 Jericho Tpke, Syosset, New York',
      contact_number: '******',
      email: '******'
    },
    recipient: {
      name: 'Dave Van Grouw',
      address: '606 3rd Ave Alton Iowa 51003',
      contact_number: '******',
      email: '******'
    },
    tracking_number: 'Fedex/USA/24/0025644',
    package_details: {
      weight_kg: 10,
      dimensions_cm: {
        length: 30,
        width: 20,
        height: 15
      },
      courier: 'Fedex',
      packages: 'Box',
      quantity: '1',
      paymentMode: 'Cash',
      origin: 'New York, USA',
      destination: 'Alton Iowa, USA',
      comment: 'Handle with care',
      status: 'Out for delivery',
      mode: 'Road',
      value_usd: 50.0
    },
    // Y-M-D
    package_received_date: '2025-03-08',
    package_received_time: '09:12:00',
    in_transit_date: '2025-03-09',
    in_transit_time: '08:00:00',
    out_for_delivery_date: '2025-03-10',
    out_for_delivery_time: '13:00:00',
    on_hold_date: '2025-03-11',
    on_hold_time: '14:00:00',
    on_hold_desc: 'Your package is currently on hold. A payment of $1,750 is required to proceed with the delivery. Please complete the payment at your earliest convenience to ensure prompt delivery',
    estimated_delivery_date: '2025-03-20',
    estimated_delivery_time: '16:00:00'
  },
  {
    package_id: 'PKG015',
    sender: {
      name: 'James Hollet',
      address: 'Los Angeles, CA, USA',
      contact_number: '304303**',
      email: 'jamesh@gmail.com'
    },
    recipient: {
      name: 'Troy Cowles',
      address: '1443 Raleigh Wilson Road Bowling Green Kentucky 42101',
      contact_number: '364203**',
      email: 'troycowles@gmail.com'
    },
    tracking_number: 'Fedex/USA/24/0025615',
    package_details: {
      weight_kg: 10,
      dimensions_cm: {
        length: 30,
        width: 20,
        height: 15
      },
      courier: 'Fedex',
      packages: 'Briefcase',
      quantity: '1',
      paymentMode: 'Cash',
      origin: 'Los Angeles, CA, USA',
      destination: '1443 Raleigh Wilson Road Bowling Green Kentucky 42101',
      comment: 'Handle with care',
      status: 'Out for delivery',
      mode: 'Road',
      value_usd: 50.0
    },
    // Y-M-D
    package_received_date: '2025-04-05',
    package_received_time: '08:12:00',
    in_transit_date: '2025-04-05',
    in_transit_time: '09:05:00',
    out_for_delivery_date: '2025-04-06',
    out_for_delivery_time: '10:21:00',
    on_hold_date: '2025-04-07',
    on_hold_time: '13:00:00',
    on_hold_desc: '',
    estimated_delivery_date: '',
    estimated_delivery_time: ''
  },
  {
    package_id: 'PKG016',
    sender: {
      name: 'Smart insurance company',
      address: 'Llandennis Ave, Cardiff CF43 6JJ, UK',
      contact_number: '******',
      email: '******'
    },
    recipient: {
      name: 'Robert nuernberger',
      address: '5211 East Commerce Avenue Spokane WA 99212',
      contact_number: '******',
      email: '******'
    },
    tracking_number: 'Fedex/USA/24/0025616',
    package_details: {
      weight_kg: 10,
      dimensions_cm: {
        length: 30,
        width: 20,
        height: 15
      },
      courier: 'Fedex',
      packages: 'Metallic trunk box, bag of money',
      quantity: '1',
      paymentMode: 'Cash',
      origin: 'Cardiff',
      destination: 'Spokane WA 99212',
      comment: 'Handle with care',
      status: 'Out for delivery',
      mode: 'Road',
      value_usd: 50.0
    },
    // Y-M-D
    package_received_date: '2025-04-10',
    package_received_time: '08:12:00',
    in_transit_date: '2025-04-10',
    in_transit_time: '09:05:00',
    out_for_delivery_date: '2025-04-21',
    out_for_delivery_time: '10:21:00',
    on_hold_date: '',
    on_hold_time: '',
    on_hold_desc: '',
    estimated_delivery_date: '2025-04-21',
    estimated_delivery_time: '13:00:00'
  },
  {
    package_id: 'PKG017',
    sender: {
      name: 'International Development Association program',
      address: '******',
      contact_number: '******',
      email: '******'
    },
    recipient: {
      name: 'PATRICK B.',
      address: '204 Main St  Po Box 133 Idaho city Idaho 83163',
      contact_number: '307690***',
      email: 'patrickb******@gmail.com'
    },
    tracking_number: 'Fedex/USA/24/0025617',
    package_details: {
      weight_kg: 10,
      dimensions_cm: {
        length: 30,
        width: 20,
        height: 15
      },
      courier: 'Fedex',
      packages: 'Cartons',
      quantity: '2',
      paymentMode: 'Cash',
      origin: 'Washington DC, USA',
      destination: '204 Main st , Idaho city, 83163',
      comment: 'Handle with care',
      status: 'Out for delivery',
      mode: 'Road',
      value_usd: 50.0
    },
    // Y-M-D
    package_received_date: '2025-04-15',
    package_received_time: '08:12:00',
    in_transit_date: '2025-04-15',
    in_transit_time: '09:05:00',
    out_for_delivery_date: '2025-04-16',
    out_for_delivery_time: '08:30:00',
    on_hold_date: '2025-04-16',
    on_hold_time: '06:00:00',
    on_hold_desc: '',
    estimated_delivery_date: '',
    estimated_delivery_time: ''
  }
];
