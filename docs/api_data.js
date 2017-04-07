define({ "api": [
  {
    "type": "get",
    "url": "/admins/",
    "title": "get all admin Users",
    "name": "getAdmins",
    "group": "Admin",
    "parameter": {
      "examples": [
        {
          "title": "Request Example:",
          "content": "get admins/",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique admin ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Modified Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date_created",
            "description": "<p>Date Created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>Unique user ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>first name of the admin user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>last name of the admin user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "admin",
            "description": "<p>User Role and admin id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 OK\n [\n  {\n    \"_id\": \"58db20acd79028187ef64ca6\",\n    \"updated_at\": \"2017-03-29T02:49:16.240Z\",\n    \"created_at\": \"2017-03-29T02:49:16.240Z\",\n    \"profile\": {\n      \"_id\": \"58db20acd79028187ef64ca5\",\n      \"updated_at\": \"2017-03-29T02:49:16.252Z\",\n      \"created_at\": \"2017-03-29T02:49:16.228Z\",\n      \"user\": \"58db20acd79028187ef64ca4\",\n      \"first_name\": \"tracy\",\n      \"last_name\": \"chapman\",\n      \"__v\": 0,\n      \"admin\": \"58db20acd79028187ef64ca6\"\n    },\n    \"__v\": 0\n  },\n  {\n    \"_id\": \"58db21b0d79028187ef64cac\",\n    \"updated_at\": \"2017-03-29T02:53:36.055Z\",\n    \"created_at\": \"2017-03-29T02:53:36.055Z\",\n    \"profile\": {\n      \"_id\": \"58db21b0d79028187ef64cab\",\n      \"updated_at\": \"2017-03-29T02:53:36.061Z\",\n      \"created_at\": \"2017-03-29T02:53:36.045Z\",\n      \"user\": \"58db21b0d79028187ef64caa\",\n      \"first_name\": \"ed\",\n      \"last_name\": \"sheeran\",\n      \"__v\": 0,\n      \"admin\": \"58db21b0d79028187ef64cac\"\n    },\n    \"__v\": 0\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/contact",
    "title": "Crate New Contact",
    "name": "CreateContact",
    "group": "Contact",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the contact.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": "<p>phone number of the contact.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "  {\n\t\"name\":\"jane doe\",\n\t\"phone_number\":\"0921405957\",\n\t\"customer\": \"58cd732b87c47631b5911934\"\n   }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique contact ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Modified Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Date Created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the contact.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": "<p>phone number of the contact</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customers",
            "description": "<p>the customer id who create the contact</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message_id",
            "description": "<p>the unique message id recieved</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "   HTTP/1.1 200 OK\n {\n\"_id\": \"58d64512f7f0d32f7f82f0a3\",\n\"updated_at\": \"2017-03-25T10:23:14.686Z\",\n\"created_at\": \"2017-03-25T10:23:14.686Z\",\n\"name\": \"jane doe \",\n\"phone_number\": \"0921405957\",\n\"__v\": 0,\n\"customers\": [],\n\"messages\": []\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/contact.js",
    "groupTitle": "Contact"
  },
  {
    "type": "delete",
    "url": "/contact/:id",
    "title": "remove a specific contact information",
    "name": "DeleteContact",
    "group": "Contact",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique contact ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Modified Date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Date Created</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the contact.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": "<p>phone number of the contact</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message_id",
            "description": "<p>the unique message id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "   HTTP/1.1 200 OK\n {\n \"_id\": \"58d21b1a72730608f763cf19\",\n\"updated_at\": \"2017-03-22T06:35:06.493Z\",\n\"created_at\": \"2017-03-22T06:35:06.493Z\",\n\"name\": \"tamri mesfin\",\n\"phone_number\": \"0921405957\",\n\"__v\": 0,\n\"messages\": []",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/contact.js",
    "groupTitle": "Contact"
  },
  {
    "type": "get",
    "url": "/contact/:id",
    "title": "Request information of a specific contact",
    "name": "GetContact",
    "group": "Contact",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique User ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the contact.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": "<p>phone number of the contact.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Modified Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Date Created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "messages",
            "description": "<p>the unique id of a message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n {\n \"_id\": \"58d21aa872730608f763cf17\",\n\"updated_at\": \"2017-03-22T06:33:12.337Z\",\n \"created_at\": \"2017-03-22T06:33:12.337Z\",\n\"name\": \"tamri mesfin\",\n \"phone_number\": \"0921405957\",\n\"__v\": 0,\n \"messages\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/contact.js",
    "groupTitle": "Contact"
  },
  {
    "type": "get",
    "url": "/contacts/",
    "title": "Request information of all Contacts",
    "name": "GetContacts",
    "group": "Contact",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique User ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Modified Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Date Created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the contact.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": "<p>phone number of the contact.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer",
            "description": "<p>customer id who created the contact</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message_id",
            "description": "<p>the unique id of a message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n[\n  {\n    \"_id\": \"58d64512f7f0d32f7f82f0a3\",\n    \"updated_at\": \"2017-03-25T10:23:14.686Z\",\n    \"created_at\": \"2017-03-25T10:23:14.686Z\",\n    \"name\": \"winie \",\n    \"phone_number\": \"0914025957\",\n    \"__v\": 0,\n    \"customers\": [],\n    \"messages\": []\n  },\n  {\n    \"_id\": \"58d6460154e918307eba5169\",\n    \"updated_at\": \"2017-03-25T10:27:13.446Z\",\n    \"created_at\": \"2017-03-25T10:27:13.446Z\",\n    \"name\": \"adbc \",\n    \"phone_number\": \"0924051957\",\n    \"__v\": 0,\n    \"customers\": [],\n    \"messages\": []\n  },\n  {\n    \"_id\": \"58d6461754e918307eba516a\",\n    \"updated_at\": \"2017-03-25T10:27:35.871Z\",\n    \"created_at\": \"2017-03-25T10:27:35.871Z\",\n    \"name\": \"jane doe \",\n    \"phone_number\": \"0921405970\",\n    \"__v\": 0,\n    \"customers\": [],\n    \"messages\": []\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/contact.js",
    "groupTitle": "Contact"
  },
  {
    "type": "put",
    "url": "/contact/:id",
    "title": "update Contact information by id",
    "name": "PutContact",
    "group": "Contact",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>update Contacts data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\"name\":\"rahel semu\",\n\"phone_number\":\"0913975056\"\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique User ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Modified Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Date Created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the contact.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": "<p>phone number of the contact.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message_id",
            "description": "<p>the unique message id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example",
          "content": " HTTP/1.1 200 OK\n {\n \"_id\": \"58d21aa872730608f763cf17\",\n\"updated_at\": \"2017-03-22T06:33:12.337Z\",\n \"created_at\": \"2017-03-22T06:33:12.337Z\",\n\"name\": \"rahel semu\",\n \"phone_number\": \"0913975056\",\n\"__v\": 0,\n \"messages\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/contact.js",
    "groupTitle": "Contact"
  },
  {
    "type": "get",
    "url": "/customers/",
    "title": "get all customer User types",
    "name": "getCustomers",
    "group": "Customer",
    "parameter": {
      "examples": [
        {
          "title": "Request Example:",
          "content": "get customers/",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique customer ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Modified Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date_created",
            "description": "<p>Date Created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>Unique user ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>first name of the customer user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>last name of the customer user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer",
            "description": "<p>User Role and customer id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 OK\n[\n  {\n    \"_id\": \"58db1fa1d79028187ef64ca2\",\n    \"updated_at\": \"2017-03-29T02:44:49.284Z\",\n    \"created_at\": \"2017-03-29T02:44:49.284Z\",\n    \"profile\": {\n      \"_id\": \"58db1fa1d79028187ef64ca1\",\n      \"updated_at\": \"2017-03-29T02:44:49.294Z\",\n      \"created_at\": \"2017-03-29T02:44:49.266Z\",\n      \"user\": \"58db1fa1d79028187ef64ca0\",\n      \"first_name\": \"sam\",\n      \"last_name\": \"smith\",\n      \"__v\": 0,\n      \"customer\": \"58db1fa1d79028187ef64ca2\"\n    },\n    \"__v\": 0,\n    \"emergency_type\": \"select\",\n    \"location\": [],\n    \"message\": [],\n    \"Service_provider\": [],\n    \"contact\": []\n  },\n  {\n    \"_id\": \"58db2165d79028187ef64ca9\",\n    \"updated_at\": \"2017-03-29T02:52:21.670Z\",\n    \"created_at\": \"2017-03-29T02:52:21.670Z\",\n    \"profile\": {\n      \"_id\": \"58db2165d79028187ef64ca8\",\n      \"updated_at\": \"2017-03-29T02:52:21.676Z\",\n      \"created_at\": \"2017-03-29T02:52:21.661Z\",\n      \"user\": \"58db2165d79028187ef64ca7\",\n      \"first_name\": \"hunter\",\n      \"last_name\": \"hayes\",\n      \"__v\": 0,\n      \"customer\": \"58db2165d79028187ef64ca9\"\n    },\n    \"__v\": 0,\n    \"emergency_type\": \"select\",\n    \"location\": [],\n    \"message\": [],\n    \"Service_provider\": [],\n    \"contact\": []\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/customer.js",
    "groupTitle": "Customer"
  },
  {
    "type": "post",
    "url": "/messages/create",
    "title": "create emergency message",
    "name": "createMessage",
    "group": "Message",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>the message body to be sent</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>location of the customer</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emergency_type",
            "description": "<p>type of emergency medical or others</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": " {\n\"message\":\"this is a test emergency message\",\n\"location\":\"addis ababa\",\n \"emergency_type\":\"medical\",\n   }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique message ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Modified Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date_created",
            "description": "<p>Date Created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status of the message sent,pending or delivered</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>the content of the message message body,location</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "emergency_type",
            "description": "<p>the type of emergency medical or others</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "to",
            "description": "<p>message recivers service provider or contacts</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"58df5b1939b28d1c3abc9a0b\",\n  \"updated_at\": \"2017-04-01T07:47:37.962Z\",\n  \"created_at\": \"2017-04-01T07:47:37.962Z\",\n  \"__v\": 0,\n  \"status\": \"sent\",\n  \"content\": {\n    \"message\": \"this is an emergency message\",\n    \"location\": \"addis ababa\",\n    \"emergency_type\": \"medical\"\n  },\n  \"to\": {\n    \"serviceProviders\": [],\n    \"contacts\": []\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/message.js",
    "groupTitle": "Message"
  },
  {
    "type": "get",
    "url": "/messages/:_id",
    "title": "get a specific message by id",
    "name": "getMessage",
    "group": "Message",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>the uique message id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "\nmessages/58db2ab967abfd211de19e10",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique message ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Modified Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date_created",
            "description": "<p>Date Created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status of the message sent,pending or delivered</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>the content of the message message body,location</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "emergency_type",
            "description": "<p>the type of emergency medical or others</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "to",
            "description": "<p>message recivers service provider or contacts</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "HTTP/1.1 200 OK\n\n{\n  \"_id\": \"58db2ab967abfd211de19e10\",\n  \"updated_at\": \"2017-03-29T03:32:09.522Z\",\n  \"created_at\": \"2017-03-29T03:32:09.522Z\",\n  \"__v\": 0,\n  \"status\": \"sent\",\n  \"content\": {\n    \"message\": \"this is an emergency message\",\n    \"location\": \"addis ababa\",\n    \"emergency_type\": \"others\"\n  },\n  \"to\": {\n    \"serviceProviders\": [],\n    \"contacts\": []\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/message.js",
    "groupTitle": "Message"
  },
  {
    "type": "delete",
    "url": "/messages/:_id",
    "title": "delete a specific message by id",
    "name": "removeMessage",
    "group": "Message",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique message ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Modified Date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date_created",
            "description": "<p>Date Created</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status of the message sent,pending or delivered</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>the content of the message message body,location</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emergency_type",
            "description": "<p>the type of emergency medical or others</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "to",
            "description": "<p>message recivers service provider or contacts</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "\n{\n  \"_id\": \"58db2ab967abfd211de19e10\",\n  \"updated_at\": \"2017-03-29T03:32:09.522Z\",\n  \"created_at\": \"2017-03-29T03:32:09.522Z\",\n  \"__v\": 0,\n  \"status\": \"sent\",\n  \"content\": {\n    \"message\": \"this is an emergency message\",\n    \"location\": \"addis ababa\",\n    \"emergency_type\": \"others\"\n  },\n  \"to\": {\n    \"serviceProviders\": [],\n    \"contacts\": []\n  }\n} *",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": "HTTP/1.1 200 OK\n{}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/message.js",
    "groupTitle": "Message"
  },
  {
    "type": "post",
    "url": "/messages/send",
    "title": "send an emergency message",
    "name": "sendMessage",
    "group": "Message",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>the message body to be sent</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "to",
            "description": "<p>the reciver of the message contacts or 911</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "from",
            "description": "<p>the sender of the message customer phone number</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n \"message\":\"this is an emergency message\",\n\"to\":\"+14042815465\",\n \"from\":\"+17187104108 \"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/message.js",
    "groupTitle": "Message"
  },
  {
    "type": "get",
    "url": "/profile/:id",
    "title": "request a specific user profile by id",
    "name": "GetProfile",
    "group": "Profile",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>unique profile id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "\nprofiles/58da1ac087f7855c63882eef",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique profile ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Modified Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date_created",
            "description": "<p>Date Created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>user Email Address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "PHONE_NUMBER",
            "description": "<p>user phone number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>user password</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>the status of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User Role</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "realm",
            "description": "<p>User Realm/Group</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>first name of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>last name of the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "HTTP/1.1 200 OK\n\n{\n  \"_id\": \"58da1ac087f7855c63882eef\",\n  \"updated_at\": \"2017-03-29T01:45:25.911Z\",\n  \"created_at\": \"2017-03-28T08:11:44.622Z\",\n  \"user\": {\n    \"_id\": \"58da1ac087f7855c63882eee\",\n    \"updated_at\": \"2017-03-28T08:14:37.652Z\",\n    \"created_at\": \"2017-03-28T08:11:44.605Z\",\n    \"email\": \"jane@gmail.com\",\n    \"phone_number\": \"+251911121314\",\n    \"password\": \"$2a$07$l5XAyiodaUrxIts6f8sR/.i8H7F8M45nhCnRJ1RuMww6TcGP9rEaq\",\n    \"staus\": \"active\",\n    \"role\": \"customer\",\n    \"realm\": \"user\"\n  },\n  \"first_name\": \"jane\",\n  \"last_name\": \"doe\",\n  \"__v\": 0,\n  \"customer\": {\n    \"_id\": \"58da1ac087f7855c63882ef0\",\n    \"updated_at\": \"2017-03-28T08:11:44.626Z\",\n    \"created_at\": \"2017-03-28T08:11:44.626Z\",\n    \"profile\": \"58da1ac087f7855c63882eef\",\n    \"__v\": 0,\n    \"emergency_type\": \"select\",\n    \"location\": [],\n    \"message\": [],\n    \"Service_provider\": [],\n    \"contact\": []\n  },\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/profile.js",
    "groupTitle": "Profile"
  },
  {
    "type": "put",
    "url": "/profile/:_Id",
    "title": "update a specific user profile",
    "name": "updateProfile",
    "group": "Profile",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "age",
            "description": "<p>age of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>country of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>the state where the user lives in</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>the city where the user lives in</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "   {\n\t\"age\":\"25\",\n\t\"country\":\"ethiopia\",\n\t\"state\":\"oromiya\",\n\t\"city\":\"adama\"\n    }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"58da1ac087f7855c63882eef\",\n  \"updated_at\": \"2017-03-29T01:44:51.192Z\",\n  \"created_at\": \"2017-03-28T08:11:44.622Z\",\n  \"user\": {\n    \"_id\": \"58da1ac087f7855c63882eee\",\n    \"updated_at\": \"2017-03-28T08:14:37.652Z\",\n    \"created_at\": \"2017-03-28T08:11:44.605Z\",\n    \"email\": \"jane@gmail.com\",\n    \"phone_number\": \"+251911121314\",\n    \"password\": \"$2a$07$l5XAyiodaUrxIts6f8sR/.i8H7F8M45nhCnRJ1RuMww6TcGP9rEaq\",\n    \"staus\": \"active\",\n    \"role\": \"customer\",\n    \"realm\": \"user\"\n  },\n  \"first_name\": \"jane\",\n  \"last_name\": \"doe\",\n  \"__v\": 0,\n  \"customer\": {\n    \"_id\": \"58da1ac087f7855c63882ef0\",\n    \"updated_at\": \"2017-03-28T08:11:44.626Z\",\n    \"created_at\": \"2017-03-28T08:11:44.626Z\",\n    \"profile\": \"58da1ac087f7855c63882eef\",\n    \"__v\": 0,\n    \"emergency_type\": \"select\",\n    \"location\": [],\n    \"message\": [],\n    \"Service_provider\": [],\n    \"contact\": []\n  },\n  \"age\": 25,\n  \"country\": \"ethiopia\",\n  \"state\": \"oromiya\",\n  \"city\": \"adama\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/profile.js",
    "groupTitle": "Profile"
  },
  {
    "type": "post",
    "url": "/ServiceProviders/",
    "title": "create ServiceProvider",
    "name": "createServiceProvider",
    "group": "ServiceProviders",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>the name of the service provider</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>location of the customer</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emergency_type",
            "description": "<p>type of emergency medical or others</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>number phone number of the service provider 911</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": " {\n\"location\":\"addis ababa\",\n\"emergency_type\":\"others\",\n\"phone_number\":\"911\",\n\"name\":\"federal police\"\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique serviceprovider ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Modified Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Date Created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the serviceprovider.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": "<p>phone number of the serviceprovider 911</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "messages",
            "description": "<p>the unique message id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customers_number",
            "description": "<p>phone number of a customer</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "emergency_type",
            "description": "<p>the type of emergency medical or others</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>the location of the serviceprovider</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "  HTTP/1.1 200 OK\n  {\n\"_id\": \"58d372873de16b0d951c672f\",\n\"updated_at\": \"2017-03-23T07:15:06.691Z\",\n\"created_at\": \"2017-03-23T07:15:06.691Z\",\n\"name\": \"federal police\",\n\"location\": \"addis ababa\",\n\"__v\": 0,\n\"emergency_type\": \"others\",\n\"messages\": [],\n\"customers_number\": [],\n\"phone_number\": \"911\"\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/serviceprovider.js",
    "groupTitle": "ServiceProviders"
  },
  {
    "type": "get",
    "url": "/ServiceProviders/:_id",
    "title": "get ServiceProvider by id",
    "name": "getServiceProvider",
    "group": "ServiceProviders",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>unique service provider id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "\nserviceproviders/58da06b027ccc951a6c4ec57",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique serviceprovider ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Modified Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Date Created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the serviceprovider.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": "<p>phone number of the serviceprovider 911</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "messages",
            "description": "<p>the unique message id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customers_number",
            "description": "<p>phone number of a customer</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "emergency_type",
            "description": "<p>the type of emergency medical or others</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>the location of the serviceprovider</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "  HTTP/1.1 200 OK\n  {\n\"_id\": \"58d372873de16b0d951c672f\",\n\"updated_at\": \"2017-03-23T07:15:06.691Z\",\n\"created_at\": \"2017-03-23T07:15:06.691Z\",\n\"name\": \"federal police\",\n\"location\": \"addis ababa\",\n\"__v\": 0,\n\"emergency_type\": \"others\",\n\"messages\": [],\n\"customers_number\": [],\n\"phone_number\": \"911\"\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/serviceprovider.js",
    "groupTitle": "ServiceProviders"
  },
  {
    "type": "post",
    "url": "/users/signup",
    "title": "Signup User",
    "name": "CreateUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>First Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>Last Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email Address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User Password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_type",
            "description": "<p>User Type - admin or customer</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": "<p>phone_number of the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": " {\n\t\"first_name\":\"teddy\",\n\t\"last_name\":\"baleh\",\n\t\"email\":\"ted@gmail.com\",\n\t\"password\":\"123456\",\n\t\"user_type\":\"customer\",\n\t\"phone_number\":\"+251911121314\"\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique User ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Modified Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date_created",
            "description": "<p>Date Created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>user Email Address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>the status of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User Role</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": "<p>phone_number of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "realm",
            "description": "<p>User Realm/Group</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "HTTP/1.1 200 OK\n[\n {\n   \"_id\": \"58da17e487f7855c63882ee5\",\n   \"updated_at\": \"2017-03-28T07:59:32.722Z\",\n   \"created_at\": \"2017-03-28T07:59:32.506Z\",\n   \"email\": \"ted@gmail.com\",\n   \"phone_number\": \"+251911121314\",\n   \"password\": \"$2a$07$un4s8p2fPSELHOCIILk93e9TtJN/pm3l31b.rop1WQrm5Nmpy7y2e\",\n   \"staus\": \"active\",\n   \"role\": \"customer\",\n   \"realm\": \"user\"\n },",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/user/:id",
    "title": "remove a specific user",
    "name": "DeleteUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>id   the unique user id to be delete</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>token generated when user login</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>type of key used authorization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n  \"_id\": \"58da1ac087f7855c63882eee\",\n  \"updated_at\": \"2017-03-28T08:14:37.652Z\",\n  \"created_at\": \"2017-03-28T08:11:44.605Z\",\n  \"email\": \"jane@gmail.com\",\n  \"phone_number\": \"+251911121314\",\n  \"password\": \"$2a$07$l5XAyiodaUrxIts6f8sR/.i8H7F8M45nhCnRJ1RuMww6TcGP9rEaq\",\n  \"staus\": \"active\",\n  \"role\": \"customer\",\n  \"realm\": \"user\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "request information of a specific user",
    "name": "GetUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>unique user id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "\nusers/58cc05510910cb0ad25c07db",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique User ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Modified Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date_created",
            "description": "<p>Date Created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>user Email Address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": "<p>phone_number of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>the status of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User Role</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "realm",
            "description": "<p>User Realm/Group</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"58de8faca8e95f1cc2ae8220\",\n  \"updated_at\": \"2017-03-31T19:59:47.362Z\",\n  \"created_at\": \"2017-03-31T17:19:40.851Z\",\n  \"email\": \"xyz@gmail.com\",\n  \"phone_number\": \"+251910101011\",\n  \"password\": \"$2a$07$EpckV1ZIQFGIcT.zVzo3c.VTf9ErXeVR//DDXVPduE1zDoq4mvy9u\",\n  \"staus\": \"active\",\n  \"role\": \"customer\",\n  \"realm\": \"user\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/",
    "title": "request information of all users",
    "name": "GetUsers",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique User ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Modified Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date_created",
            "description": "<p>Date Created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>user Email Address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": "<p>phone_number of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>the status of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User Role</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "realm",
            "description": "<p>User Realm/Group</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"_id\": \"58da17e487f7855c63882ee5\",\n    \"updated_at\": \"2017-03-28T07:59:32.722Z\",\n    \"created_at\": \"2017-03-28T07:59:32.506Z\",\n    \"email\": \"ted@gmail.com\",\n    \"phone_number\": \"+251911121314\",\n    \"password\": \"$2a$07$un4s8p2fPSELHOCIILk93e9TtJN/pm3l31b.rop1WQrm5Nmpy7y2e\",\n    \"staus\": \"active\",\n    \"role\": \"customer\",\n    \"realm\": \"user\"\n  },\n  {\n    \"_id\": \"58da1ac087f7855c63882eee\",\n    \"updated_at\": \"2017-03-28T08:14:37.652Z\",\n    \"created_at\": \"2017-03-28T08:11:44.605Z\",\n    \"email\": \"jane@gmail.com\",\n    \"phone_number\": \"+251911121314\",\n    \"password\": \"$2a$07$l5XAyiodaUrxIts6f8sR/.i8H7F8M45nhCnRJ1RuMww6TcGP9rEaq\",\n    \"staus\": \"active\",\n    \"role\": \"customer\",\n    \"realm\": \"user\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/users/login",
    "title": "User login",
    "name": "Login",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email Address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User Password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n  \n \"email\":\"teddy@gmail.com\",\n \"password\":\"123456\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>generated token id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique User ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Modified Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date_created",
            "description": "<p>Date Created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>user Email Address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>the status of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User Role</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "realm",
            "description": "<p>User Realm/Group</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "HTTP/1.1 200 OK\n{\n \"token\": \"X0YpTvEhCT9Zv+5nUQDI\",\n \"user\": {\n   \"_id\": \"58d6298c2c774c1d2ddb9865\",\n   \"updated_at\": \"2017-03-25T11:14:36.625Z\",\n   \"created_at\": \"2017-03-25T08:25:48.049Z\",\n   \"email\": \"teddy@gmail.com\",\n   \"staus\": \"active\",\n   \"role\": \"customer\",\n   \"realm\": \"user\"\n }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/:_id/logout",
    "title": "logged in user logging out",
    "name": "logout",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>logged in user id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tokenID",
            "description": "<p>user token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "\nusers/58da182b87f7855c63882ee9/logout",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n  \"message\": \"user Logged out successfully\"\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/:_id/updatePass",
    "title": "change password of a specific user",
    "name": "passwordChange",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>current user password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "new_password",
            "description": "<p>the new passwod to be used</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n\t \n\t\"password\":\"password\",\n\t\"new_password\":\"rlylongpassword\"\n  }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n  \"message\": \"password changed Sucessfully\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/user/:_Id",
    "title": "update a specific user information",
    "name": "updateUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email Address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": "<p>User phone number</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n\t \n\t\"email\":\"xyz@gmail.com\",\n\t\"phone_number\":\"+251910101011\"\n  }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique User ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Modified Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date_created",
            "description": "<p>Date Created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>user Email Address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": "<p>phone_number of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>the status of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User Role</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "realm",
            "description": "<p>User Realm/Group</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"58de8faca8e95f1cc2ae8220\",\n  \"updated_at\": \"2017-03-31T19:59:39.505Z\",\n  \"created_at\": \"2017-03-31T17:19:40.851Z\",\n  \"email\": \"xyz@gmail.com\",\n  \"phone_number\": \"+251910101011\",\n  \"password\": \"$2a$07$EpckV1ZIQFGIcT.zVzo3c.VTf9ErXeVR//DDXVPduE1zDoq4mvy9u\",\n  \"staus\": \"active\",\n  \"role\": \"customer\",\n  \"realm\": \"user\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  }
] });
