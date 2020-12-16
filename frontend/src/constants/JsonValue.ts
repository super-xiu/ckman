export const JsonValue = {
  Common: {
    FlushInterval: 3,
    BufferSize: 30000,
    MinBufferSize: 0,
    MsgSizeHint: 0,
    LayoutDate: '20060102',
    LayoutDateTime: '20160102 150405',
    LayoutDateTime64: '20160102 150405.999999999',
    LogLevel: '',
    Replicas: 0,
  },
  Kafka: [
    {
      Name: 'kfk1',
      Brokers: '192.168.101.57:9092,192.168.101.58:9092,192.168.101.59:9092',
      Version: '2.2.1',
      TLS: {
        Enable: false,
        CaCertFiles: '',
        ClientCertFile: '',
        ClientKeyFile: '',
        InsecureSkipVerify: false,
      },
      Sasl: {
        Enable: false,
        Mechanism: '',
        Username: '',
        Password: '',
        GSSAPI: {
          AuthType: 0,
          KeyTabPath: '',
          KerberosConfigPath: '',
          ServiceName: '',
          Username: '',
          Password: '',
          Realm: '',
          DisablePAFXFAST: false,
        },
      },
    },
    {
      Name: 'kfk2',
      Brokers: '192.168.31.64:9093',
      Version: '2.2.1',
      TLS: {
        Enable: false,
        CaCertFiles: '/etc/security/ca-cert',
        ClientCertFile: '',
        ClientKeyFile: '',
        InsecureSkipVerify: true,
      },
      Sasl: {
        Enable: false,
        Mechanism: '',
        Username: '',
        Password: '',
        GSSAPI: {
          AuthType: 0,
          KeyTabPath: '',
          KerberosConfigPath: '',
          ServiceName: '',
          Username: '',
          Password: '',
          Realm: '',
          DisablePAFXFAST: false,
        },
      },
    },
    {
      Name: 'kfk3',
      Brokers: '192.168.31.64:9094',
      Version: '2.2.1',
      TLS: {
        Enable: false,
        CaCertFiles: '',
        ClientCertFile: '',
        ClientKeyFile: '',
        InsecureSkipVerify: false,
      },
      Sasl: {
        Enable: true,
        Mechanism: 'PLAIN',
        Username: 'alice',
        Password: 'alice-secret',
        GSSAPI: {
          AuthType: 0,
          KeyTabPath: '',
          KerberosConfigPath: '',
          ServiceName: '',
          Username: '',
          Password: '',
          Realm: '',
          DisablePAFXFAST: false,
        },
      },
    },
    {
      Name: 'kfk4',
      Brokers: '192.168.31.64:9094',
      Version: '2.2.1',
      TLS: {
        Enable: false,
        CaCertFiles: '',
        ClientCertFile: '',
        ClientKeyFile: '',
        InsecureSkipVerify: false,
      },
      Sasl: {
        Enable: true,
        Mechanism: 'SCRAM-SHA-256',
        Username: 'alice',
        Password: 'alice-secret',
        GSSAPI: {
          AuthType: 0,
          KeyTabPath: '',
          KerberosConfigPath: '',
          ServiceName: '',
          Username: '',
          Password: '',
          Realm: '',
          DisablePAFXFAST: false,
        },
      },
    },
    {
      Name: 'kfk5',
      Brokers: '192.168.31.64:9094',
      Version: '2.2.1',
      TLS: {
        Enable: false,
        CaCertFiles: '',
        ClientCertFile: '',
        ClientKeyFile: '',
        InsecureSkipVerify: false,
      },
      Sasl: {
        Enable: true,
        Mechanism: 'GSSAPI',
        Username: '',
        Password: '',
        GSSAPI: {
          AuthType: 2,
          KeyTabPath: '/etc/security/mmmtest.keytab',
          KerberosConfigPath: '/etc/krb5.conf',
          ServiceName: 'kafka',
          Username: 'mmm',
          Password: '',
          Realm: 'ALANWANG.COM',
          DisablePAFXFAST: false,
        },
      },
    },
  ],
  Tasks: [
    {
      Name: 'sharding_xxhash_rep_plain_sasl_kerberos',
      KafkaClient: '',
      Kafka: 'kfk4',
      Topic: 'TEST500G',
      ConsumerGroup: 'sharding_xxhash_rep',
      Earliest: true,
      Parser: 'gjson',
      CsvFormat: null,
      Delimiter: '',
      Clickhouse: 'ch1',
      TableName: 'nginx_access_log22',
      AutoSchema: true,
      ExcludeColumns: null,
      Dims: null,
      ShardingKey: 'request',
      ShardingPolicy: 'hash',
      FlushInterval: 0,
      BufferSize: 0,
      MinBufferSize: 0,
      MsgSizeHint: 0,
      LayoutDate: '',
      LayoutDateTime: '',
      LayoutDateTime64: '',
      Replicas: 2,
    },
    {
      Name: 'metrics_sharding_xxhash_rep',
      KafkaClient: 'sarama',
      Kafka: 'kfk1',
      Topic: 'sensor_dt_result_online',
      ConsumerGroup: 'metrics_sharding_xxhash_rep',
      Earliest: true,
      Parser: 'fastjson',
      CsvFormat: null,
      Delimiter: '',
      Clickhouse: 'ch1',
      TableName: 'sensor_dt_result_online22',
      AutoSchema: true,
      ExcludeColumns: null,
      Dims: null,
      ShardingKey: '@time',
      ShardingPolicy: 'stripe,60',
      FlushInterval: 0,
      BufferSize: 0,
      MinBufferSize: 0,
      MsgSizeHint: 0,
      LayoutDate: '',
      LayoutDateTime: '',
      LayoutDateTime64: '',
      Replicas: 3,
    },
  ],
};