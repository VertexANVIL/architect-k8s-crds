import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { addSchema } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
import { Model, setSchema, ModelData, createTypeMetaGuard } from "@kubernetes-models/base";
import { register } from "@kubernetes-models/validate";

const schemaId = "postgres-operator.crunchydata.com.v1beta1.PostgresCluster";
const schema = {
  "type": "object",
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "postgres-operator.crunchydata.com/v1beta1"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "PostgresCluster"
      ]
    },
    "metadata": {
      "oneOf": [
        {
          "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
        },
        {
          "type": "null"
        }
      ]
    },
    "spec": {
      "properties": {
        "backups": {
          "properties": {
            "pgbackrest": {
              "properties": {
                "configuration": {
                  "items": {
                    "properties": {
                      "configMap": {
                        "properties": {
                          "items": {
                            "items": {
                              "properties": {
                                "key": {
                                  "type": "string"
                                },
                                "mode": {
                                  "format": "int32",
                                  "type": "integer",
                                  "nullable": true
                                },
                                "path": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "key",
                                "path"
                              ],
                              "type": "object"
                            },
                            "type": "array",
                            "nullable": true
                          },
                          "name": {
                            "type": "string",
                            "nullable": true
                          },
                          "optional": {
                            "type": "boolean",
                            "nullable": true
                          }
                        },
                        "type": "object",
                        "nullable": true
                      },
                      "downwardAPI": {
                        "properties": {
                          "items": {
                            "items": {
                              "properties": {
                                "fieldRef": {
                                  "properties": {
                                    "apiVersion": {
                                      "type": "string",
                                      "nullable": true
                                    },
                                    "fieldPath": {
                                      "type": "string"
                                    }
                                  },
                                  "required": [
                                    "fieldPath"
                                  ],
                                  "type": "object",
                                  "nullable": true
                                },
                                "mode": {
                                  "format": "int32",
                                  "type": "integer",
                                  "nullable": true
                                },
                                "path": {
                                  "type": "string"
                                },
                                "resourceFieldRef": {
                                  "properties": {
                                    "containerName": {
                                      "type": "string",
                                      "nullable": true
                                    },
                                    "divisor": {
                                      "oneOf": [
                                        {
                                          "anyOf": [
                                            {
                                              "type": "integer"
                                            },
                                            {
                                              "type": "string"
                                            }
                                          ],
                                          "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                                        },
                                        {
                                          "type": "null"
                                        }
                                      ]
                                    },
                                    "resource": {
                                      "type": "string"
                                    }
                                  },
                                  "required": [
                                    "resource"
                                  ],
                                  "type": "object",
                                  "nullable": true
                                }
                              },
                              "required": [
                                "path"
                              ],
                              "type": "object"
                            },
                            "type": "array",
                            "nullable": true
                          }
                        },
                        "type": "object",
                        "nullable": true
                      },
                      "secret": {
                        "properties": {
                          "items": {
                            "items": {
                              "properties": {
                                "key": {
                                  "type": "string"
                                },
                                "mode": {
                                  "format": "int32",
                                  "type": "integer",
                                  "nullable": true
                                },
                                "path": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "key",
                                "path"
                              ],
                              "type": "object"
                            },
                            "type": "array",
                            "nullable": true
                          },
                          "name": {
                            "type": "string",
                            "nullable": true
                          },
                          "optional": {
                            "type": "boolean",
                            "nullable": true
                          }
                        },
                        "type": "object",
                        "nullable": true
                      },
                      "serviceAccountToken": {
                        "properties": {
                          "audience": {
                            "type": "string",
                            "nullable": true
                          },
                          "expirationSeconds": {
                            "format": "int64",
                            "type": "integer",
                            "nullable": true
                          },
                          "path": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "path"
                        ],
                        "type": "object",
                        "nullable": true
                      }
                    },
                    "type": "object"
                  },
                  "type": "array",
                  "nullable": true
                },
                "global": {
                  "additionalProperties": {
                    "type": "string"
                  },
                  "type": "object",
                  "properties": {},
                  "nullable": true
                },
                "image": {
                  "type": "string",
                  "nullable": true
                },
                "jobs": {
                  "properties": {
                    "priorityClassName": {
                      "type": "string",
                      "nullable": true
                    },
                    "resources": {
                      "properties": {
                        "limits": {
                          "additionalProperties": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "string"
                              }
                            ],
                            "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                          },
                          "type": "object",
                          "properties": {},
                          "nullable": true
                        },
                        "requests": {
                          "additionalProperties": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "string"
                              }
                            ],
                            "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                          },
                          "type": "object",
                          "properties": {},
                          "nullable": true
                        }
                      },
                      "type": "object",
                      "nullable": true
                    }
                  },
                  "type": "object",
                  "nullable": true
                },
                "manual": {
                  "properties": {
                    "options": {
                      "items": {
                        "type": "string"
                      },
                      "type": "array",
                      "nullable": true
                    },
                    "repoName": {
                      "pattern": "^repo[1-4]",
                      "type": "string"
                    }
                  },
                  "required": [
                    "repoName"
                  ],
                  "type": "object",
                  "nullable": true
                },
                "metadata": {
                  "properties": {
                    "annotations": {
                      "additionalProperties": {
                        "type": "string"
                      },
                      "type": "object",
                      "properties": {},
                      "nullable": true
                    },
                    "labels": {
                      "additionalProperties": {
                        "type": "string"
                      },
                      "type": "object",
                      "properties": {},
                      "nullable": true
                    }
                  },
                  "type": "object",
                  "nullable": true
                },
                "repoHost": {
                  "properties": {
                    "affinity": {
                      "properties": {
                        "nodeAffinity": {
                          "properties": {
                            "preferredDuringSchedulingIgnoredDuringExecution": {
                              "items": {
                                "properties": {
                                  "preference": {
                                    "properties": {
                                      "matchExpressions": {
                                        "items": {
                                          "properties": {
                                            "key": {
                                              "type": "string"
                                            },
                                            "operator": {
                                              "type": "string"
                                            },
                                            "values": {
                                              "items": {
                                                "type": "string"
                                              },
                                              "type": "array",
                                              "nullable": true
                                            }
                                          },
                                          "required": [
                                            "key",
                                            "operator"
                                          ],
                                          "type": "object"
                                        },
                                        "type": "array",
                                        "nullable": true
                                      },
                                      "matchFields": {
                                        "items": {
                                          "properties": {
                                            "key": {
                                              "type": "string"
                                            },
                                            "operator": {
                                              "type": "string"
                                            },
                                            "values": {
                                              "items": {
                                                "type": "string"
                                              },
                                              "type": "array",
                                              "nullable": true
                                            }
                                          },
                                          "required": [
                                            "key",
                                            "operator"
                                          ],
                                          "type": "object"
                                        },
                                        "type": "array",
                                        "nullable": true
                                      }
                                    },
                                    "type": "object"
                                  },
                                  "weight": {
                                    "format": "int32",
                                    "type": "integer"
                                  }
                                },
                                "required": [
                                  "preference",
                                  "weight"
                                ],
                                "type": "object"
                              },
                              "type": "array",
                              "nullable": true
                            },
                            "requiredDuringSchedulingIgnoredDuringExecution": {
                              "properties": {
                                "nodeSelectorTerms": {
                                  "items": {
                                    "properties": {
                                      "matchExpressions": {
                                        "items": {
                                          "properties": {
                                            "key": {
                                              "type": "string"
                                            },
                                            "operator": {
                                              "type": "string"
                                            },
                                            "values": {
                                              "items": {
                                                "type": "string"
                                              },
                                              "type": "array",
                                              "nullable": true
                                            }
                                          },
                                          "required": [
                                            "key",
                                            "operator"
                                          ],
                                          "type": "object"
                                        },
                                        "type": "array",
                                        "nullable": true
                                      },
                                      "matchFields": {
                                        "items": {
                                          "properties": {
                                            "key": {
                                              "type": "string"
                                            },
                                            "operator": {
                                              "type": "string"
                                            },
                                            "values": {
                                              "items": {
                                                "type": "string"
                                              },
                                              "type": "array",
                                              "nullable": true
                                            }
                                          },
                                          "required": [
                                            "key",
                                            "operator"
                                          ],
                                          "type": "object"
                                        },
                                        "type": "array",
                                        "nullable": true
                                      }
                                    },
                                    "type": "object"
                                  },
                                  "type": "array"
                                }
                              },
                              "required": [
                                "nodeSelectorTerms"
                              ],
                              "type": "object",
                              "nullable": true
                            }
                          },
                          "type": "object",
                          "nullable": true
                        },
                        "podAffinity": {
                          "properties": {
                            "preferredDuringSchedulingIgnoredDuringExecution": {
                              "items": {
                                "properties": {
                                  "podAffinityTerm": {
                                    "properties": {
                                      "labelSelector": {
                                        "properties": {
                                          "matchExpressions": {
                                            "items": {
                                              "properties": {
                                                "key": {
                                                  "type": "string"
                                                },
                                                "operator": {
                                                  "type": "string"
                                                },
                                                "values": {
                                                  "items": {
                                                    "type": "string"
                                                  },
                                                  "type": "array",
                                                  "nullable": true
                                                }
                                              },
                                              "required": [
                                                "key",
                                                "operator"
                                              ],
                                              "type": "object"
                                            },
                                            "type": "array",
                                            "nullable": true
                                          },
                                          "matchLabels": {
                                            "additionalProperties": {
                                              "type": "string"
                                            },
                                            "type": "object",
                                            "properties": {},
                                            "nullable": true
                                          }
                                        },
                                        "type": "object",
                                        "nullable": true
                                      },
                                      "namespaces": {
                                        "items": {
                                          "type": "string"
                                        },
                                        "type": "array",
                                        "nullable": true
                                      },
                                      "topologyKey": {
                                        "type": "string"
                                      }
                                    },
                                    "required": [
                                      "topologyKey"
                                    ],
                                    "type": "object"
                                  },
                                  "weight": {
                                    "format": "int32",
                                    "type": "integer"
                                  }
                                },
                                "required": [
                                  "podAffinityTerm",
                                  "weight"
                                ],
                                "type": "object"
                              },
                              "type": "array",
                              "nullable": true
                            },
                            "requiredDuringSchedulingIgnoredDuringExecution": {
                              "items": {
                                "properties": {
                                  "labelSelector": {
                                    "properties": {
                                      "matchExpressions": {
                                        "items": {
                                          "properties": {
                                            "key": {
                                              "type": "string"
                                            },
                                            "operator": {
                                              "type": "string"
                                            },
                                            "values": {
                                              "items": {
                                                "type": "string"
                                              },
                                              "type": "array",
                                              "nullable": true
                                            }
                                          },
                                          "required": [
                                            "key",
                                            "operator"
                                          ],
                                          "type": "object"
                                        },
                                        "type": "array",
                                        "nullable": true
                                      },
                                      "matchLabels": {
                                        "additionalProperties": {
                                          "type": "string"
                                        },
                                        "type": "object",
                                        "properties": {},
                                        "nullable": true
                                      }
                                    },
                                    "type": "object",
                                    "nullable": true
                                  },
                                  "namespaces": {
                                    "items": {
                                      "type": "string"
                                    },
                                    "type": "array",
                                    "nullable": true
                                  },
                                  "topologyKey": {
                                    "type": "string"
                                  }
                                },
                                "required": [
                                  "topologyKey"
                                ],
                                "type": "object"
                              },
                              "type": "array",
                              "nullable": true
                            }
                          },
                          "type": "object",
                          "nullable": true
                        },
                        "podAntiAffinity": {
                          "properties": {
                            "preferredDuringSchedulingIgnoredDuringExecution": {
                              "items": {
                                "properties": {
                                  "podAffinityTerm": {
                                    "properties": {
                                      "labelSelector": {
                                        "properties": {
                                          "matchExpressions": {
                                            "items": {
                                              "properties": {
                                                "key": {
                                                  "type": "string"
                                                },
                                                "operator": {
                                                  "type": "string"
                                                },
                                                "values": {
                                                  "items": {
                                                    "type": "string"
                                                  },
                                                  "type": "array",
                                                  "nullable": true
                                                }
                                              },
                                              "required": [
                                                "key",
                                                "operator"
                                              ],
                                              "type": "object"
                                            },
                                            "type": "array",
                                            "nullable": true
                                          },
                                          "matchLabels": {
                                            "additionalProperties": {
                                              "type": "string"
                                            },
                                            "type": "object",
                                            "properties": {},
                                            "nullable": true
                                          }
                                        },
                                        "type": "object",
                                        "nullable": true
                                      },
                                      "namespaces": {
                                        "items": {
                                          "type": "string"
                                        },
                                        "type": "array",
                                        "nullable": true
                                      },
                                      "topologyKey": {
                                        "type": "string"
                                      }
                                    },
                                    "required": [
                                      "topologyKey"
                                    ],
                                    "type": "object"
                                  },
                                  "weight": {
                                    "format": "int32",
                                    "type": "integer"
                                  }
                                },
                                "required": [
                                  "podAffinityTerm",
                                  "weight"
                                ],
                                "type": "object"
                              },
                              "type": "array",
                              "nullable": true
                            },
                            "requiredDuringSchedulingIgnoredDuringExecution": {
                              "items": {
                                "properties": {
                                  "labelSelector": {
                                    "properties": {
                                      "matchExpressions": {
                                        "items": {
                                          "properties": {
                                            "key": {
                                              "type": "string"
                                            },
                                            "operator": {
                                              "type": "string"
                                            },
                                            "values": {
                                              "items": {
                                                "type": "string"
                                              },
                                              "type": "array",
                                              "nullable": true
                                            }
                                          },
                                          "required": [
                                            "key",
                                            "operator"
                                          ],
                                          "type": "object"
                                        },
                                        "type": "array",
                                        "nullable": true
                                      },
                                      "matchLabels": {
                                        "additionalProperties": {
                                          "type": "string"
                                        },
                                        "type": "object",
                                        "properties": {},
                                        "nullable": true
                                      }
                                    },
                                    "type": "object",
                                    "nullable": true
                                  },
                                  "namespaces": {
                                    "items": {
                                      "type": "string"
                                    },
                                    "type": "array",
                                    "nullable": true
                                  },
                                  "topologyKey": {
                                    "type": "string"
                                  }
                                },
                                "required": [
                                  "topologyKey"
                                ],
                                "type": "object"
                              },
                              "type": "array",
                              "nullable": true
                            }
                          },
                          "type": "object",
                          "nullable": true
                        }
                      },
                      "type": "object",
                      "nullable": true
                    },
                    "priorityClassName": {
                      "type": "string",
                      "nullable": true
                    },
                    "resources": {
                      "properties": {
                        "limits": {
                          "additionalProperties": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "string"
                              }
                            ],
                            "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                          },
                          "type": "object",
                          "properties": {},
                          "nullable": true
                        },
                        "requests": {
                          "additionalProperties": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "string"
                              }
                            ],
                            "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                          },
                          "type": "object",
                          "properties": {},
                          "nullable": true
                        }
                      },
                      "type": "object",
                      "nullable": true
                    },
                    "sshConfigMap": {
                      "properties": {
                        "items": {
                          "items": {
                            "properties": {
                              "key": {
                                "type": "string"
                              },
                              "mode": {
                                "format": "int32",
                                "type": "integer",
                                "nullable": true
                              },
                              "path": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "key",
                              "path"
                            ],
                            "type": "object"
                          },
                          "type": "array",
                          "nullable": true
                        },
                        "name": {
                          "type": "string",
                          "nullable": true
                        },
                        "optional": {
                          "type": "boolean",
                          "nullable": true
                        }
                      },
                      "type": "object",
                      "nullable": true
                    },
                    "sshSecret": {
                      "properties": {
                        "items": {
                          "items": {
                            "properties": {
                              "key": {
                                "type": "string"
                              },
                              "mode": {
                                "format": "int32",
                                "type": "integer",
                                "nullable": true
                              },
                              "path": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "key",
                              "path"
                            ],
                            "type": "object"
                          },
                          "type": "array",
                          "nullable": true
                        },
                        "name": {
                          "type": "string",
                          "nullable": true
                        },
                        "optional": {
                          "type": "boolean",
                          "nullable": true
                        }
                      },
                      "type": "object",
                      "nullable": true
                    },
                    "tolerations": {
                      "items": {
                        "properties": {
                          "effect": {
                            "type": "string",
                            "nullable": true
                          },
                          "key": {
                            "type": "string",
                            "nullable": true
                          },
                          "operator": {
                            "type": "string",
                            "nullable": true
                          },
                          "tolerationSeconds": {
                            "format": "int64",
                            "type": "integer",
                            "nullable": true
                          },
                          "value": {
                            "type": "string",
                            "nullable": true
                          }
                        },
                        "type": "object"
                      },
                      "type": "array",
                      "nullable": true
                    },
                    "topologySpreadConstraints": {
                      "items": {
                        "properties": {
                          "labelSelector": {
                            "properties": {
                              "matchExpressions": {
                                "items": {
                                  "properties": {
                                    "key": {
                                      "type": "string"
                                    },
                                    "operator": {
                                      "type": "string"
                                    },
                                    "values": {
                                      "items": {
                                        "type": "string"
                                      },
                                      "type": "array",
                                      "nullable": true
                                    }
                                  },
                                  "required": [
                                    "key",
                                    "operator"
                                  ],
                                  "type": "object"
                                },
                                "type": "array",
                                "nullable": true
                              },
                              "matchLabels": {
                                "additionalProperties": {
                                  "type": "string"
                                },
                                "type": "object",
                                "properties": {},
                                "nullable": true
                              }
                            },
                            "type": "object",
                            "nullable": true
                          },
                          "maxSkew": {
                            "format": "int32",
                            "type": "integer"
                          },
                          "topologyKey": {
                            "type": "string"
                          },
                          "whenUnsatisfiable": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "maxSkew",
                          "topologyKey",
                          "whenUnsatisfiable"
                        ],
                        "type": "object"
                      },
                      "type": "array",
                      "nullable": true
                    }
                  },
                  "type": "object",
                  "nullable": true
                },
                "repos": {
                  "items": {
                    "properties": {
                      "azure": {
                        "properties": {
                          "container": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "container"
                        ],
                        "type": "object",
                        "nullable": true
                      },
                      "gcs": {
                        "properties": {
                          "bucket": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "bucket"
                        ],
                        "type": "object",
                        "nullable": true
                      },
                      "name": {
                        "pattern": "^repo[1-4]",
                        "type": "string"
                      },
                      "s3": {
                        "properties": {
                          "bucket": {
                            "type": "string"
                          },
                          "endpoint": {
                            "type": "string"
                          },
                          "region": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "bucket",
                          "endpoint",
                          "region"
                        ],
                        "type": "object",
                        "nullable": true
                      },
                      "schedules": {
                        "properties": {
                          "differential": {
                            "minLength": 6,
                            "type": "string",
                            "nullable": true
                          },
                          "full": {
                            "minLength": 6,
                            "type": "string",
                            "nullable": true
                          },
                          "incremental": {
                            "minLength": 6,
                            "type": "string",
                            "nullable": true
                          }
                        },
                        "type": "object",
                        "nullable": true
                      },
                      "volume": {
                        "properties": {
                          "volumeClaimSpec": {
                            "properties": {
                              "accessModes": {
                                "items": {
                                  "type": "string"
                                },
                                "minItems": 1,
                                "type": "array"
                              },
                              "dataSource": {
                                "properties": {
                                  "apiGroup": {
                                    "type": "string",
                                    "nullable": true
                                  },
                                  "kind": {
                                    "type": "string"
                                  },
                                  "name": {
                                    "type": "string"
                                  }
                                },
                                "required": [
                                  "kind",
                                  "name"
                                ],
                                "type": "object",
                                "nullable": true
                              },
                              "resources": {
                                "properties": {
                                  "limits": {
                                    "additionalProperties": {
                                      "anyOf": [
                                        {
                                          "type": "integer"
                                        },
                                        {
                                          "type": "string"
                                        }
                                      ],
                                      "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                                    },
                                    "type": "object",
                                    "properties": {},
                                    "nullable": true
                                  },
                                  "requests": {
                                    "additionalProperties": {
                                      "anyOf": [
                                        {
                                          "type": "integer"
                                        },
                                        {
                                          "type": "string"
                                        }
                                      ],
                                      "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                                    },
                                    "required": [
                                      "storage"
                                    ],
                                    "type": "object",
                                    "properties": {}
                                  }
                                },
                                "required": [
                                  "requests"
                                ],
                                "type": "object"
                              },
                              "selector": {
                                "properties": {
                                  "matchExpressions": {
                                    "items": {
                                      "properties": {
                                        "key": {
                                          "type": "string"
                                        },
                                        "operator": {
                                          "type": "string"
                                        },
                                        "values": {
                                          "items": {
                                            "type": "string"
                                          },
                                          "type": "array",
                                          "nullable": true
                                        }
                                      },
                                      "required": [
                                        "key",
                                        "operator"
                                      ],
                                      "type": "object"
                                    },
                                    "type": "array",
                                    "nullable": true
                                  },
                                  "matchLabels": {
                                    "additionalProperties": {
                                      "type": "string"
                                    },
                                    "type": "object",
                                    "properties": {},
                                    "nullable": true
                                  }
                                },
                                "type": "object",
                                "nullable": true
                              },
                              "storageClassName": {
                                "type": "string",
                                "nullable": true
                              },
                              "volumeMode": {
                                "type": "string",
                                "nullable": true
                              },
                              "volumeName": {
                                "type": "string",
                                "nullable": true
                              }
                            },
                            "required": [
                              "accessModes",
                              "resources"
                            ],
                            "type": "object"
                          }
                        },
                        "required": [
                          "volumeClaimSpec"
                        ],
                        "type": "object",
                        "nullable": true
                      }
                    },
                    "required": [
                      "name"
                    ],
                    "type": "object"
                  },
                  "minItems": 1,
                  "type": "array"
                },
                "restore": {
                  "properties": {
                    "affinity": {
                      "properties": {
                        "nodeAffinity": {
                          "properties": {
                            "preferredDuringSchedulingIgnoredDuringExecution": {
                              "items": {
                                "properties": {
                                  "preference": {
                                    "properties": {
                                      "matchExpressions": {
                                        "items": {
                                          "properties": {
                                            "key": {
                                              "type": "string"
                                            },
                                            "operator": {
                                              "type": "string"
                                            },
                                            "values": {
                                              "items": {
                                                "type": "string"
                                              },
                                              "type": "array",
                                              "nullable": true
                                            }
                                          },
                                          "required": [
                                            "key",
                                            "operator"
                                          ],
                                          "type": "object"
                                        },
                                        "type": "array",
                                        "nullable": true
                                      },
                                      "matchFields": {
                                        "items": {
                                          "properties": {
                                            "key": {
                                              "type": "string"
                                            },
                                            "operator": {
                                              "type": "string"
                                            },
                                            "values": {
                                              "items": {
                                                "type": "string"
                                              },
                                              "type": "array",
                                              "nullable": true
                                            }
                                          },
                                          "required": [
                                            "key",
                                            "operator"
                                          ],
                                          "type": "object"
                                        },
                                        "type": "array",
                                        "nullable": true
                                      }
                                    },
                                    "type": "object"
                                  },
                                  "weight": {
                                    "format": "int32",
                                    "type": "integer"
                                  }
                                },
                                "required": [
                                  "preference",
                                  "weight"
                                ],
                                "type": "object"
                              },
                              "type": "array",
                              "nullable": true
                            },
                            "requiredDuringSchedulingIgnoredDuringExecution": {
                              "properties": {
                                "nodeSelectorTerms": {
                                  "items": {
                                    "properties": {
                                      "matchExpressions": {
                                        "items": {
                                          "properties": {
                                            "key": {
                                              "type": "string"
                                            },
                                            "operator": {
                                              "type": "string"
                                            },
                                            "values": {
                                              "items": {
                                                "type": "string"
                                              },
                                              "type": "array",
                                              "nullable": true
                                            }
                                          },
                                          "required": [
                                            "key",
                                            "operator"
                                          ],
                                          "type": "object"
                                        },
                                        "type": "array",
                                        "nullable": true
                                      },
                                      "matchFields": {
                                        "items": {
                                          "properties": {
                                            "key": {
                                              "type": "string"
                                            },
                                            "operator": {
                                              "type": "string"
                                            },
                                            "values": {
                                              "items": {
                                                "type": "string"
                                              },
                                              "type": "array",
                                              "nullable": true
                                            }
                                          },
                                          "required": [
                                            "key",
                                            "operator"
                                          ],
                                          "type": "object"
                                        },
                                        "type": "array",
                                        "nullable": true
                                      }
                                    },
                                    "type": "object"
                                  },
                                  "type": "array"
                                }
                              },
                              "required": [
                                "nodeSelectorTerms"
                              ],
                              "type": "object",
                              "nullable": true
                            }
                          },
                          "type": "object",
                          "nullable": true
                        },
                        "podAffinity": {
                          "properties": {
                            "preferredDuringSchedulingIgnoredDuringExecution": {
                              "items": {
                                "properties": {
                                  "podAffinityTerm": {
                                    "properties": {
                                      "labelSelector": {
                                        "properties": {
                                          "matchExpressions": {
                                            "items": {
                                              "properties": {
                                                "key": {
                                                  "type": "string"
                                                },
                                                "operator": {
                                                  "type": "string"
                                                },
                                                "values": {
                                                  "items": {
                                                    "type": "string"
                                                  },
                                                  "type": "array",
                                                  "nullable": true
                                                }
                                              },
                                              "required": [
                                                "key",
                                                "operator"
                                              ],
                                              "type": "object"
                                            },
                                            "type": "array",
                                            "nullable": true
                                          },
                                          "matchLabels": {
                                            "additionalProperties": {
                                              "type": "string"
                                            },
                                            "type": "object",
                                            "properties": {},
                                            "nullable": true
                                          }
                                        },
                                        "type": "object",
                                        "nullable": true
                                      },
                                      "namespaces": {
                                        "items": {
                                          "type": "string"
                                        },
                                        "type": "array",
                                        "nullable": true
                                      },
                                      "topologyKey": {
                                        "type": "string"
                                      }
                                    },
                                    "required": [
                                      "topologyKey"
                                    ],
                                    "type": "object"
                                  },
                                  "weight": {
                                    "format": "int32",
                                    "type": "integer"
                                  }
                                },
                                "required": [
                                  "podAffinityTerm",
                                  "weight"
                                ],
                                "type": "object"
                              },
                              "type": "array",
                              "nullable": true
                            },
                            "requiredDuringSchedulingIgnoredDuringExecution": {
                              "items": {
                                "properties": {
                                  "labelSelector": {
                                    "properties": {
                                      "matchExpressions": {
                                        "items": {
                                          "properties": {
                                            "key": {
                                              "type": "string"
                                            },
                                            "operator": {
                                              "type": "string"
                                            },
                                            "values": {
                                              "items": {
                                                "type": "string"
                                              },
                                              "type": "array",
                                              "nullable": true
                                            }
                                          },
                                          "required": [
                                            "key",
                                            "operator"
                                          ],
                                          "type": "object"
                                        },
                                        "type": "array",
                                        "nullable": true
                                      },
                                      "matchLabels": {
                                        "additionalProperties": {
                                          "type": "string"
                                        },
                                        "type": "object",
                                        "properties": {},
                                        "nullable": true
                                      }
                                    },
                                    "type": "object",
                                    "nullable": true
                                  },
                                  "namespaces": {
                                    "items": {
                                      "type": "string"
                                    },
                                    "type": "array",
                                    "nullable": true
                                  },
                                  "topologyKey": {
                                    "type": "string"
                                  }
                                },
                                "required": [
                                  "topologyKey"
                                ],
                                "type": "object"
                              },
                              "type": "array",
                              "nullable": true
                            }
                          },
                          "type": "object",
                          "nullable": true
                        },
                        "podAntiAffinity": {
                          "properties": {
                            "preferredDuringSchedulingIgnoredDuringExecution": {
                              "items": {
                                "properties": {
                                  "podAffinityTerm": {
                                    "properties": {
                                      "labelSelector": {
                                        "properties": {
                                          "matchExpressions": {
                                            "items": {
                                              "properties": {
                                                "key": {
                                                  "type": "string"
                                                },
                                                "operator": {
                                                  "type": "string"
                                                },
                                                "values": {
                                                  "items": {
                                                    "type": "string"
                                                  },
                                                  "type": "array",
                                                  "nullable": true
                                                }
                                              },
                                              "required": [
                                                "key",
                                                "operator"
                                              ],
                                              "type": "object"
                                            },
                                            "type": "array",
                                            "nullable": true
                                          },
                                          "matchLabels": {
                                            "additionalProperties": {
                                              "type": "string"
                                            },
                                            "type": "object",
                                            "properties": {},
                                            "nullable": true
                                          }
                                        },
                                        "type": "object",
                                        "nullable": true
                                      },
                                      "namespaces": {
                                        "items": {
                                          "type": "string"
                                        },
                                        "type": "array",
                                        "nullable": true
                                      },
                                      "topologyKey": {
                                        "type": "string"
                                      }
                                    },
                                    "required": [
                                      "topologyKey"
                                    ],
                                    "type": "object"
                                  },
                                  "weight": {
                                    "format": "int32",
                                    "type": "integer"
                                  }
                                },
                                "required": [
                                  "podAffinityTerm",
                                  "weight"
                                ],
                                "type": "object"
                              },
                              "type": "array",
                              "nullable": true
                            },
                            "requiredDuringSchedulingIgnoredDuringExecution": {
                              "items": {
                                "properties": {
                                  "labelSelector": {
                                    "properties": {
                                      "matchExpressions": {
                                        "items": {
                                          "properties": {
                                            "key": {
                                              "type": "string"
                                            },
                                            "operator": {
                                              "type": "string"
                                            },
                                            "values": {
                                              "items": {
                                                "type": "string"
                                              },
                                              "type": "array",
                                              "nullable": true
                                            }
                                          },
                                          "required": [
                                            "key",
                                            "operator"
                                          ],
                                          "type": "object"
                                        },
                                        "type": "array",
                                        "nullable": true
                                      },
                                      "matchLabels": {
                                        "additionalProperties": {
                                          "type": "string"
                                        },
                                        "type": "object",
                                        "properties": {},
                                        "nullable": true
                                      }
                                    },
                                    "type": "object",
                                    "nullable": true
                                  },
                                  "namespaces": {
                                    "items": {
                                      "type": "string"
                                    },
                                    "type": "array",
                                    "nullable": true
                                  },
                                  "topologyKey": {
                                    "type": "string"
                                  }
                                },
                                "required": [
                                  "topologyKey"
                                ],
                                "type": "object"
                              },
                              "type": "array",
                              "nullable": true
                            }
                          },
                          "type": "object",
                          "nullable": true
                        }
                      },
                      "type": "object",
                      "nullable": true
                    },
                    "clusterName": {
                      "type": "string",
                      "nullable": true
                    },
                    "clusterNamespace": {
                      "type": "string",
                      "nullable": true
                    },
                    "enabled": {
                      "default": false,
                      "type": "boolean"
                    },
                    "options": {
                      "items": {
                        "type": "string"
                      },
                      "type": "array",
                      "nullable": true
                    },
                    "priorityClassName": {
                      "type": "string",
                      "nullable": true
                    },
                    "repoName": {
                      "pattern": "^repo[1-4]",
                      "type": "string"
                    },
                    "resources": {
                      "properties": {
                        "limits": {
                          "additionalProperties": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "string"
                              }
                            ],
                            "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                          },
                          "type": "object",
                          "properties": {},
                          "nullable": true
                        },
                        "requests": {
                          "additionalProperties": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "string"
                              }
                            ],
                            "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                          },
                          "type": "object",
                          "properties": {},
                          "nullable": true
                        }
                      },
                      "type": "object",
                      "nullable": true
                    },
                    "tolerations": {
                      "items": {
                        "properties": {
                          "effect": {
                            "type": "string",
                            "nullable": true
                          },
                          "key": {
                            "type": "string",
                            "nullable": true
                          },
                          "operator": {
                            "type": "string",
                            "nullable": true
                          },
                          "tolerationSeconds": {
                            "format": "int64",
                            "type": "integer",
                            "nullable": true
                          },
                          "value": {
                            "type": "string",
                            "nullable": true
                          }
                        },
                        "type": "object"
                      },
                      "type": "array",
                      "nullable": true
                    }
                  },
                  "required": [
                    "enabled",
                    "repoName"
                  ],
                  "type": "object",
                  "nullable": true
                },
                "sidecars": {
                  "properties": {
                    "pgbackrest": {
                      "properties": {
                        "resources": {
                          "properties": {
                            "limits": {
                              "additionalProperties": {
                                "anyOf": [
                                  {
                                    "type": "integer"
                                  },
                                  {
                                    "type": "string"
                                  }
                                ],
                                "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                              },
                              "type": "object",
                              "properties": {},
                              "nullable": true
                            },
                            "requests": {
                              "additionalProperties": {
                                "anyOf": [
                                  {
                                    "type": "integer"
                                  },
                                  {
                                    "type": "string"
                                  }
                                ],
                                "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                              },
                              "type": "object",
                              "properties": {},
                              "nullable": true
                            }
                          },
                          "type": "object",
                          "nullable": true
                        }
                      },
                      "type": "object",
                      "nullable": true
                    }
                  },
                  "type": "object",
                  "nullable": true
                }
              },
              "required": [
                "repos"
              ],
              "type": "object"
            }
          },
          "required": [
            "pgbackrest"
          ],
          "type": "object"
        },
        "customReplicationTLSSecret": {
          "properties": {
            "items": {
              "items": {
                "properties": {
                  "key": {
                    "type": "string"
                  },
                  "mode": {
                    "format": "int32",
                    "type": "integer",
                    "nullable": true
                  },
                  "path": {
                    "type": "string"
                  }
                },
                "required": [
                  "key",
                  "path"
                ],
                "type": "object"
              },
              "type": "array",
              "nullable": true
            },
            "name": {
              "type": "string",
              "nullable": true
            },
            "optional": {
              "type": "boolean",
              "nullable": true
            }
          },
          "type": "object",
          "nullable": true
        },
        "customTLSSecret": {
          "properties": {
            "items": {
              "items": {
                "properties": {
                  "key": {
                    "type": "string"
                  },
                  "mode": {
                    "format": "int32",
                    "type": "integer",
                    "nullable": true
                  },
                  "path": {
                    "type": "string"
                  }
                },
                "required": [
                  "key",
                  "path"
                ],
                "type": "object"
              },
              "type": "array",
              "nullable": true
            },
            "name": {
              "type": "string",
              "nullable": true
            },
            "optional": {
              "type": "boolean",
              "nullable": true
            }
          },
          "type": "object",
          "nullable": true
        },
        "dataSource": {
          "properties": {
            "postgresCluster": {
              "properties": {
                "affinity": {
                  "properties": {
                    "nodeAffinity": {
                      "properties": {
                        "preferredDuringSchedulingIgnoredDuringExecution": {
                          "items": {
                            "properties": {
                              "preference": {
                                "properties": {
                                  "matchExpressions": {
                                    "items": {
                                      "properties": {
                                        "key": {
                                          "type": "string"
                                        },
                                        "operator": {
                                          "type": "string"
                                        },
                                        "values": {
                                          "items": {
                                            "type": "string"
                                          },
                                          "type": "array",
                                          "nullable": true
                                        }
                                      },
                                      "required": [
                                        "key",
                                        "operator"
                                      ],
                                      "type": "object"
                                    },
                                    "type": "array",
                                    "nullable": true
                                  },
                                  "matchFields": {
                                    "items": {
                                      "properties": {
                                        "key": {
                                          "type": "string"
                                        },
                                        "operator": {
                                          "type": "string"
                                        },
                                        "values": {
                                          "items": {
                                            "type": "string"
                                          },
                                          "type": "array",
                                          "nullable": true
                                        }
                                      },
                                      "required": [
                                        "key",
                                        "operator"
                                      ],
                                      "type": "object"
                                    },
                                    "type": "array",
                                    "nullable": true
                                  }
                                },
                                "type": "object"
                              },
                              "weight": {
                                "format": "int32",
                                "type": "integer"
                              }
                            },
                            "required": [
                              "preference",
                              "weight"
                            ],
                            "type": "object"
                          },
                          "type": "array",
                          "nullable": true
                        },
                        "requiredDuringSchedulingIgnoredDuringExecution": {
                          "properties": {
                            "nodeSelectorTerms": {
                              "items": {
                                "properties": {
                                  "matchExpressions": {
                                    "items": {
                                      "properties": {
                                        "key": {
                                          "type": "string"
                                        },
                                        "operator": {
                                          "type": "string"
                                        },
                                        "values": {
                                          "items": {
                                            "type": "string"
                                          },
                                          "type": "array",
                                          "nullable": true
                                        }
                                      },
                                      "required": [
                                        "key",
                                        "operator"
                                      ],
                                      "type": "object"
                                    },
                                    "type": "array",
                                    "nullable": true
                                  },
                                  "matchFields": {
                                    "items": {
                                      "properties": {
                                        "key": {
                                          "type": "string"
                                        },
                                        "operator": {
                                          "type": "string"
                                        },
                                        "values": {
                                          "items": {
                                            "type": "string"
                                          },
                                          "type": "array",
                                          "nullable": true
                                        }
                                      },
                                      "required": [
                                        "key",
                                        "operator"
                                      ],
                                      "type": "object"
                                    },
                                    "type": "array",
                                    "nullable": true
                                  }
                                },
                                "type": "object"
                              },
                              "type": "array"
                            }
                          },
                          "required": [
                            "nodeSelectorTerms"
                          ],
                          "type": "object",
                          "nullable": true
                        }
                      },
                      "type": "object",
                      "nullable": true
                    },
                    "podAffinity": {
                      "properties": {
                        "preferredDuringSchedulingIgnoredDuringExecution": {
                          "items": {
                            "properties": {
                              "podAffinityTerm": {
                                "properties": {
                                  "labelSelector": {
                                    "properties": {
                                      "matchExpressions": {
                                        "items": {
                                          "properties": {
                                            "key": {
                                              "type": "string"
                                            },
                                            "operator": {
                                              "type": "string"
                                            },
                                            "values": {
                                              "items": {
                                                "type": "string"
                                              },
                                              "type": "array",
                                              "nullable": true
                                            }
                                          },
                                          "required": [
                                            "key",
                                            "operator"
                                          ],
                                          "type": "object"
                                        },
                                        "type": "array",
                                        "nullable": true
                                      },
                                      "matchLabels": {
                                        "additionalProperties": {
                                          "type": "string"
                                        },
                                        "type": "object",
                                        "properties": {},
                                        "nullable": true
                                      }
                                    },
                                    "type": "object",
                                    "nullable": true
                                  },
                                  "namespaces": {
                                    "items": {
                                      "type": "string"
                                    },
                                    "type": "array",
                                    "nullable": true
                                  },
                                  "topologyKey": {
                                    "type": "string"
                                  }
                                },
                                "required": [
                                  "topologyKey"
                                ],
                                "type": "object"
                              },
                              "weight": {
                                "format": "int32",
                                "type": "integer"
                              }
                            },
                            "required": [
                              "podAffinityTerm",
                              "weight"
                            ],
                            "type": "object"
                          },
                          "type": "array",
                          "nullable": true
                        },
                        "requiredDuringSchedulingIgnoredDuringExecution": {
                          "items": {
                            "properties": {
                              "labelSelector": {
                                "properties": {
                                  "matchExpressions": {
                                    "items": {
                                      "properties": {
                                        "key": {
                                          "type": "string"
                                        },
                                        "operator": {
                                          "type": "string"
                                        },
                                        "values": {
                                          "items": {
                                            "type": "string"
                                          },
                                          "type": "array",
                                          "nullable": true
                                        }
                                      },
                                      "required": [
                                        "key",
                                        "operator"
                                      ],
                                      "type": "object"
                                    },
                                    "type": "array",
                                    "nullable": true
                                  },
                                  "matchLabels": {
                                    "additionalProperties": {
                                      "type": "string"
                                    },
                                    "type": "object",
                                    "properties": {},
                                    "nullable": true
                                  }
                                },
                                "type": "object",
                                "nullable": true
                              },
                              "namespaces": {
                                "items": {
                                  "type": "string"
                                },
                                "type": "array",
                                "nullable": true
                              },
                              "topologyKey": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "topologyKey"
                            ],
                            "type": "object"
                          },
                          "type": "array",
                          "nullable": true
                        }
                      },
                      "type": "object",
                      "nullable": true
                    },
                    "podAntiAffinity": {
                      "properties": {
                        "preferredDuringSchedulingIgnoredDuringExecution": {
                          "items": {
                            "properties": {
                              "podAffinityTerm": {
                                "properties": {
                                  "labelSelector": {
                                    "properties": {
                                      "matchExpressions": {
                                        "items": {
                                          "properties": {
                                            "key": {
                                              "type": "string"
                                            },
                                            "operator": {
                                              "type": "string"
                                            },
                                            "values": {
                                              "items": {
                                                "type": "string"
                                              },
                                              "type": "array",
                                              "nullable": true
                                            }
                                          },
                                          "required": [
                                            "key",
                                            "operator"
                                          ],
                                          "type": "object"
                                        },
                                        "type": "array",
                                        "nullable": true
                                      },
                                      "matchLabels": {
                                        "additionalProperties": {
                                          "type": "string"
                                        },
                                        "type": "object",
                                        "properties": {},
                                        "nullable": true
                                      }
                                    },
                                    "type": "object",
                                    "nullable": true
                                  },
                                  "namespaces": {
                                    "items": {
                                      "type": "string"
                                    },
                                    "type": "array",
                                    "nullable": true
                                  },
                                  "topologyKey": {
                                    "type": "string"
                                  }
                                },
                                "required": [
                                  "topologyKey"
                                ],
                                "type": "object"
                              },
                              "weight": {
                                "format": "int32",
                                "type": "integer"
                              }
                            },
                            "required": [
                              "podAffinityTerm",
                              "weight"
                            ],
                            "type": "object"
                          },
                          "type": "array",
                          "nullable": true
                        },
                        "requiredDuringSchedulingIgnoredDuringExecution": {
                          "items": {
                            "properties": {
                              "labelSelector": {
                                "properties": {
                                  "matchExpressions": {
                                    "items": {
                                      "properties": {
                                        "key": {
                                          "type": "string"
                                        },
                                        "operator": {
                                          "type": "string"
                                        },
                                        "values": {
                                          "items": {
                                            "type": "string"
                                          },
                                          "type": "array",
                                          "nullable": true
                                        }
                                      },
                                      "required": [
                                        "key",
                                        "operator"
                                      ],
                                      "type": "object"
                                    },
                                    "type": "array",
                                    "nullable": true
                                  },
                                  "matchLabels": {
                                    "additionalProperties": {
                                      "type": "string"
                                    },
                                    "type": "object",
                                    "properties": {},
                                    "nullable": true
                                  }
                                },
                                "type": "object",
                                "nullable": true
                              },
                              "namespaces": {
                                "items": {
                                  "type": "string"
                                },
                                "type": "array",
                                "nullable": true
                              },
                              "topologyKey": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "topologyKey"
                            ],
                            "type": "object"
                          },
                          "type": "array",
                          "nullable": true
                        }
                      },
                      "type": "object",
                      "nullable": true
                    }
                  },
                  "type": "object",
                  "nullable": true
                },
                "clusterName": {
                  "type": "string",
                  "nullable": true
                },
                "clusterNamespace": {
                  "type": "string",
                  "nullable": true
                },
                "options": {
                  "items": {
                    "type": "string"
                  },
                  "type": "array",
                  "nullable": true
                },
                "priorityClassName": {
                  "type": "string",
                  "nullable": true
                },
                "repoName": {
                  "pattern": "^repo[1-4]",
                  "type": "string"
                },
                "resources": {
                  "properties": {
                    "limits": {
                      "additionalProperties": {
                        "anyOf": [
                          {
                            "type": "integer"
                          },
                          {
                            "type": "string"
                          }
                        ],
                        "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                      },
                      "type": "object",
                      "properties": {},
                      "nullable": true
                    },
                    "requests": {
                      "additionalProperties": {
                        "anyOf": [
                          {
                            "type": "integer"
                          },
                          {
                            "type": "string"
                          }
                        ],
                        "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                      },
                      "type": "object",
                      "properties": {},
                      "nullable": true
                    }
                  },
                  "type": "object",
                  "nullable": true
                },
                "tolerations": {
                  "items": {
                    "properties": {
                      "effect": {
                        "type": "string",
                        "nullable": true
                      },
                      "key": {
                        "type": "string",
                        "nullable": true
                      },
                      "operator": {
                        "type": "string",
                        "nullable": true
                      },
                      "tolerationSeconds": {
                        "format": "int64",
                        "type": "integer",
                        "nullable": true
                      },
                      "value": {
                        "type": "string",
                        "nullable": true
                      }
                    },
                    "type": "object"
                  },
                  "type": "array",
                  "nullable": true
                }
              },
              "required": [
                "repoName"
              ],
              "type": "object",
              "nullable": true
            },
            "volumes": {
              "properties": {
                "pgBackRestVolume": {
                  "properties": {
                    "directory": {
                      "type": "string",
                      "nullable": true
                    },
                    "pvcName": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "pvcName"
                  ],
                  "type": "object",
                  "nullable": true
                },
                "pgDataVolume": {
                  "properties": {
                    "directory": {
                      "type": "string",
                      "nullable": true
                    },
                    "pvcName": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "pvcName"
                  ],
                  "type": "object",
                  "nullable": true
                },
                "pgWALVolume": {
                  "properties": {
                    "directory": {
                      "type": "string",
                      "nullable": true
                    },
                    "pvcName": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "pvcName"
                  ],
                  "type": "object",
                  "nullable": true
                }
              },
              "type": "object",
              "nullable": true
            }
          },
          "type": "object",
          "nullable": true
        },
        "databaseInitSQL": {
          "properties": {
            "key": {
              "type": "string"
            },
            "name": {
              "type": "string"
            }
          },
          "required": [
            "key",
            "name"
          ],
          "type": "object",
          "nullable": true
        },
        "disableDefaultPodScheduling": {
          "type": "boolean",
          "nullable": true
        },
        "image": {
          "type": "string",
          "nullable": true
        },
        "imagePullPolicy": {
          "enum": [
            "Always",
            "Never",
            "IfNotPresent"
          ],
          "type": "string",
          "nullable": true
        },
        "imagePullSecrets": {
          "items": {
            "properties": {
              "name": {
                "type": "string",
                "nullable": true
              }
            },
            "type": "object"
          },
          "type": "array",
          "nullable": true
        },
        "instances": {
          "items": {
            "properties": {
              "affinity": {
                "properties": {
                  "nodeAffinity": {
                    "properties": {
                      "preferredDuringSchedulingIgnoredDuringExecution": {
                        "items": {
                          "properties": {
                            "preference": {
                              "properties": {
                                "matchExpressions": {
                                  "items": {
                                    "properties": {
                                      "key": {
                                        "type": "string"
                                      },
                                      "operator": {
                                        "type": "string"
                                      },
                                      "values": {
                                        "items": {
                                          "type": "string"
                                        },
                                        "type": "array",
                                        "nullable": true
                                      }
                                    },
                                    "required": [
                                      "key",
                                      "operator"
                                    ],
                                    "type": "object"
                                  },
                                  "type": "array",
                                  "nullable": true
                                },
                                "matchFields": {
                                  "items": {
                                    "properties": {
                                      "key": {
                                        "type": "string"
                                      },
                                      "operator": {
                                        "type": "string"
                                      },
                                      "values": {
                                        "items": {
                                          "type": "string"
                                        },
                                        "type": "array",
                                        "nullable": true
                                      }
                                    },
                                    "required": [
                                      "key",
                                      "operator"
                                    ],
                                    "type": "object"
                                  },
                                  "type": "array",
                                  "nullable": true
                                }
                              },
                              "type": "object"
                            },
                            "weight": {
                              "format": "int32",
                              "type": "integer"
                            }
                          },
                          "required": [
                            "preference",
                            "weight"
                          ],
                          "type": "object"
                        },
                        "type": "array",
                        "nullable": true
                      },
                      "requiredDuringSchedulingIgnoredDuringExecution": {
                        "properties": {
                          "nodeSelectorTerms": {
                            "items": {
                              "properties": {
                                "matchExpressions": {
                                  "items": {
                                    "properties": {
                                      "key": {
                                        "type": "string"
                                      },
                                      "operator": {
                                        "type": "string"
                                      },
                                      "values": {
                                        "items": {
                                          "type": "string"
                                        },
                                        "type": "array",
                                        "nullable": true
                                      }
                                    },
                                    "required": [
                                      "key",
                                      "operator"
                                    ],
                                    "type": "object"
                                  },
                                  "type": "array",
                                  "nullable": true
                                },
                                "matchFields": {
                                  "items": {
                                    "properties": {
                                      "key": {
                                        "type": "string"
                                      },
                                      "operator": {
                                        "type": "string"
                                      },
                                      "values": {
                                        "items": {
                                          "type": "string"
                                        },
                                        "type": "array",
                                        "nullable": true
                                      }
                                    },
                                    "required": [
                                      "key",
                                      "operator"
                                    ],
                                    "type": "object"
                                  },
                                  "type": "array",
                                  "nullable": true
                                }
                              },
                              "type": "object"
                            },
                            "type": "array"
                          }
                        },
                        "required": [
                          "nodeSelectorTerms"
                        ],
                        "type": "object",
                        "nullable": true
                      }
                    },
                    "type": "object",
                    "nullable": true
                  },
                  "podAffinity": {
                    "properties": {
                      "preferredDuringSchedulingIgnoredDuringExecution": {
                        "items": {
                          "properties": {
                            "podAffinityTerm": {
                              "properties": {
                                "labelSelector": {
                                  "properties": {
                                    "matchExpressions": {
                                      "items": {
                                        "properties": {
                                          "key": {
                                            "type": "string"
                                          },
                                          "operator": {
                                            "type": "string"
                                          },
                                          "values": {
                                            "items": {
                                              "type": "string"
                                            },
                                            "type": "array",
                                            "nullable": true
                                          }
                                        },
                                        "required": [
                                          "key",
                                          "operator"
                                        ],
                                        "type": "object"
                                      },
                                      "type": "array",
                                      "nullable": true
                                    },
                                    "matchLabels": {
                                      "additionalProperties": {
                                        "type": "string"
                                      },
                                      "type": "object",
                                      "properties": {},
                                      "nullable": true
                                    }
                                  },
                                  "type": "object",
                                  "nullable": true
                                },
                                "namespaces": {
                                  "items": {
                                    "type": "string"
                                  },
                                  "type": "array",
                                  "nullable": true
                                },
                                "topologyKey": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "topologyKey"
                              ],
                              "type": "object"
                            },
                            "weight": {
                              "format": "int32",
                              "type": "integer"
                            }
                          },
                          "required": [
                            "podAffinityTerm",
                            "weight"
                          ],
                          "type": "object"
                        },
                        "type": "array",
                        "nullable": true
                      },
                      "requiredDuringSchedulingIgnoredDuringExecution": {
                        "items": {
                          "properties": {
                            "labelSelector": {
                              "properties": {
                                "matchExpressions": {
                                  "items": {
                                    "properties": {
                                      "key": {
                                        "type": "string"
                                      },
                                      "operator": {
                                        "type": "string"
                                      },
                                      "values": {
                                        "items": {
                                          "type": "string"
                                        },
                                        "type": "array",
                                        "nullable": true
                                      }
                                    },
                                    "required": [
                                      "key",
                                      "operator"
                                    ],
                                    "type": "object"
                                  },
                                  "type": "array",
                                  "nullable": true
                                },
                                "matchLabels": {
                                  "additionalProperties": {
                                    "type": "string"
                                  },
                                  "type": "object",
                                  "properties": {},
                                  "nullable": true
                                }
                              },
                              "type": "object",
                              "nullable": true
                            },
                            "namespaces": {
                              "items": {
                                "type": "string"
                              },
                              "type": "array",
                              "nullable": true
                            },
                            "topologyKey": {
                              "type": "string"
                            }
                          },
                          "required": [
                            "topologyKey"
                          ],
                          "type": "object"
                        },
                        "type": "array",
                        "nullable": true
                      }
                    },
                    "type": "object",
                    "nullable": true
                  },
                  "podAntiAffinity": {
                    "properties": {
                      "preferredDuringSchedulingIgnoredDuringExecution": {
                        "items": {
                          "properties": {
                            "podAffinityTerm": {
                              "properties": {
                                "labelSelector": {
                                  "properties": {
                                    "matchExpressions": {
                                      "items": {
                                        "properties": {
                                          "key": {
                                            "type": "string"
                                          },
                                          "operator": {
                                            "type": "string"
                                          },
                                          "values": {
                                            "items": {
                                              "type": "string"
                                            },
                                            "type": "array",
                                            "nullable": true
                                          }
                                        },
                                        "required": [
                                          "key",
                                          "operator"
                                        ],
                                        "type": "object"
                                      },
                                      "type": "array",
                                      "nullable": true
                                    },
                                    "matchLabels": {
                                      "additionalProperties": {
                                        "type": "string"
                                      },
                                      "type": "object",
                                      "properties": {},
                                      "nullable": true
                                    }
                                  },
                                  "type": "object",
                                  "nullable": true
                                },
                                "namespaces": {
                                  "items": {
                                    "type": "string"
                                  },
                                  "type": "array",
                                  "nullable": true
                                },
                                "topologyKey": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "topologyKey"
                              ],
                              "type": "object"
                            },
                            "weight": {
                              "format": "int32",
                              "type": "integer"
                            }
                          },
                          "required": [
                            "podAffinityTerm",
                            "weight"
                          ],
                          "type": "object"
                        },
                        "type": "array",
                        "nullable": true
                      },
                      "requiredDuringSchedulingIgnoredDuringExecution": {
                        "items": {
                          "properties": {
                            "labelSelector": {
                              "properties": {
                                "matchExpressions": {
                                  "items": {
                                    "properties": {
                                      "key": {
                                        "type": "string"
                                      },
                                      "operator": {
                                        "type": "string"
                                      },
                                      "values": {
                                        "items": {
                                          "type": "string"
                                        },
                                        "type": "array",
                                        "nullable": true
                                      }
                                    },
                                    "required": [
                                      "key",
                                      "operator"
                                    ],
                                    "type": "object"
                                  },
                                  "type": "array",
                                  "nullable": true
                                },
                                "matchLabels": {
                                  "additionalProperties": {
                                    "type": "string"
                                  },
                                  "type": "object",
                                  "properties": {},
                                  "nullable": true
                                }
                              },
                              "type": "object",
                              "nullable": true
                            },
                            "namespaces": {
                              "items": {
                                "type": "string"
                              },
                              "type": "array",
                              "nullable": true
                            },
                            "topologyKey": {
                              "type": "string"
                            }
                          },
                          "required": [
                            "topologyKey"
                          ],
                          "type": "object"
                        },
                        "type": "array",
                        "nullable": true
                      }
                    },
                    "type": "object",
                    "nullable": true
                  }
                },
                "type": "object",
                "nullable": true
              },
              "dataVolumeClaimSpec": {
                "properties": {
                  "accessModes": {
                    "items": {
                      "type": "string"
                    },
                    "minItems": 1,
                    "type": "array"
                  },
                  "dataSource": {
                    "properties": {
                      "apiGroup": {
                        "type": "string",
                        "nullable": true
                      },
                      "kind": {
                        "type": "string"
                      },
                      "name": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "kind",
                      "name"
                    ],
                    "type": "object",
                    "nullable": true
                  },
                  "resources": {
                    "properties": {
                      "limits": {
                        "additionalProperties": {
                          "anyOf": [
                            {
                              "type": "integer"
                            },
                            {
                              "type": "string"
                            }
                          ],
                          "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                        },
                        "type": "object",
                        "properties": {},
                        "nullable": true
                      },
                      "requests": {
                        "additionalProperties": {
                          "anyOf": [
                            {
                              "type": "integer"
                            },
                            {
                              "type": "string"
                            }
                          ],
                          "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                        },
                        "required": [
                          "storage"
                        ],
                        "type": "object",
                        "properties": {}
                      }
                    },
                    "required": [
                      "requests"
                    ],
                    "type": "object"
                  },
                  "selector": {
                    "properties": {
                      "matchExpressions": {
                        "items": {
                          "properties": {
                            "key": {
                              "type": "string"
                            },
                            "operator": {
                              "type": "string"
                            },
                            "values": {
                              "items": {
                                "type": "string"
                              },
                              "type": "array",
                              "nullable": true
                            }
                          },
                          "required": [
                            "key",
                            "operator"
                          ],
                          "type": "object"
                        },
                        "type": "array",
                        "nullable": true
                      },
                      "matchLabels": {
                        "additionalProperties": {
                          "type": "string"
                        },
                        "type": "object",
                        "properties": {},
                        "nullable": true
                      }
                    },
                    "type": "object",
                    "nullable": true
                  },
                  "storageClassName": {
                    "type": "string",
                    "nullable": true
                  },
                  "volumeMode": {
                    "type": "string",
                    "nullable": true
                  },
                  "volumeName": {
                    "type": "string",
                    "nullable": true
                  }
                },
                "required": [
                  "accessModes",
                  "resources"
                ],
                "type": "object"
              },
              "metadata": {
                "properties": {
                  "annotations": {
                    "additionalProperties": {
                      "type": "string"
                    },
                    "type": "object",
                    "properties": {},
                    "nullable": true
                  },
                  "labels": {
                    "additionalProperties": {
                      "type": "string"
                    },
                    "type": "object",
                    "properties": {},
                    "nullable": true
                  }
                },
                "type": "object",
                "nullable": true
              },
              "name": {
                "default": "",
                "type": "string",
                "nullable": true
              },
              "priorityClassName": {
                "type": "string",
                "nullable": true
              },
              "replicas": {
                "default": 1,
                "format": "int32",
                "type": "integer",
                "minimum": 1,
                "nullable": true
              },
              "resources": {
                "properties": {
                  "limits": {
                    "additionalProperties": {
                      "anyOf": [
                        {
                          "type": "integer"
                        },
                        {
                          "type": "string"
                        }
                      ],
                      "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                    },
                    "type": "object",
                    "properties": {},
                    "nullable": true
                  },
                  "requests": {
                    "additionalProperties": {
                      "anyOf": [
                        {
                          "type": "integer"
                        },
                        {
                          "type": "string"
                        }
                      ],
                      "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                    },
                    "type": "object",
                    "properties": {},
                    "nullable": true
                  }
                },
                "type": "object",
                "nullable": true
              },
              "sidecars": {
                "properties": {
                  "replicaCertCopy": {
                    "properties": {
                      "resources": {
                        "properties": {
                          "limits": {
                            "additionalProperties": {
                              "anyOf": [
                                {
                                  "type": "integer"
                                },
                                {
                                  "type": "string"
                                }
                              ],
                              "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                            },
                            "type": "object",
                            "properties": {},
                            "nullable": true
                          },
                          "requests": {
                            "additionalProperties": {
                              "anyOf": [
                                {
                                  "type": "integer"
                                },
                                {
                                  "type": "string"
                                }
                              ],
                              "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                            },
                            "type": "object",
                            "properties": {},
                            "nullable": true
                          }
                        },
                        "type": "object",
                        "nullable": true
                      }
                    },
                    "type": "object",
                    "nullable": true
                  }
                },
                "type": "object",
                "nullable": true
              },
              "tolerations": {
                "items": {
                  "properties": {
                    "effect": {
                      "type": "string",
                      "nullable": true
                    },
                    "key": {
                      "type": "string",
                      "nullable": true
                    },
                    "operator": {
                      "type": "string",
                      "nullable": true
                    },
                    "tolerationSeconds": {
                      "format": "int64",
                      "type": "integer",
                      "nullable": true
                    },
                    "value": {
                      "type": "string",
                      "nullable": true
                    }
                  },
                  "type": "object"
                },
                "type": "array",
                "nullable": true
              },
              "topologySpreadConstraints": {
                "items": {
                  "properties": {
                    "labelSelector": {
                      "properties": {
                        "matchExpressions": {
                          "items": {
                            "properties": {
                              "key": {
                                "type": "string"
                              },
                              "operator": {
                                "type": "string"
                              },
                              "values": {
                                "items": {
                                  "type": "string"
                                },
                                "type": "array",
                                "nullable": true
                              }
                            },
                            "required": [
                              "key",
                              "operator"
                            ],
                            "type": "object"
                          },
                          "type": "array",
                          "nullable": true
                        },
                        "matchLabels": {
                          "additionalProperties": {
                            "type": "string"
                          },
                          "type": "object",
                          "properties": {},
                          "nullable": true
                        }
                      },
                      "type": "object",
                      "nullable": true
                    },
                    "maxSkew": {
                      "format": "int32",
                      "type": "integer"
                    },
                    "topologyKey": {
                      "type": "string"
                    },
                    "whenUnsatisfiable": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "maxSkew",
                    "topologyKey",
                    "whenUnsatisfiable"
                  ],
                  "type": "object"
                },
                "type": "array",
                "nullable": true
              },
              "walVolumeClaimSpec": {
                "properties": {
                  "accessModes": {
                    "items": {
                      "type": "string"
                    },
                    "minItems": 1,
                    "type": "array"
                  },
                  "dataSource": {
                    "properties": {
                      "apiGroup": {
                        "type": "string",
                        "nullable": true
                      },
                      "kind": {
                        "type": "string"
                      },
                      "name": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "kind",
                      "name"
                    ],
                    "type": "object",
                    "nullable": true
                  },
                  "resources": {
                    "properties": {
                      "limits": {
                        "additionalProperties": {
                          "anyOf": [
                            {
                              "type": "integer"
                            },
                            {
                              "type": "string"
                            }
                          ],
                          "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                        },
                        "type": "object",
                        "properties": {},
                        "nullable": true
                      },
                      "requests": {
                        "additionalProperties": {
                          "anyOf": [
                            {
                              "type": "integer"
                            },
                            {
                              "type": "string"
                            }
                          ],
                          "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                        },
                        "required": [
                          "storage"
                        ],
                        "type": "object",
                        "properties": {}
                      }
                    },
                    "required": [
                      "requests"
                    ],
                    "type": "object"
                  },
                  "selector": {
                    "properties": {
                      "matchExpressions": {
                        "items": {
                          "properties": {
                            "key": {
                              "type": "string"
                            },
                            "operator": {
                              "type": "string"
                            },
                            "values": {
                              "items": {
                                "type": "string"
                              },
                              "type": "array",
                              "nullable": true
                            }
                          },
                          "required": [
                            "key",
                            "operator"
                          ],
                          "type": "object"
                        },
                        "type": "array",
                        "nullable": true
                      },
                      "matchLabels": {
                        "additionalProperties": {
                          "type": "string"
                        },
                        "type": "object",
                        "properties": {},
                        "nullable": true
                      }
                    },
                    "type": "object",
                    "nullable": true
                  },
                  "storageClassName": {
                    "type": "string",
                    "nullable": true
                  },
                  "volumeMode": {
                    "type": "string",
                    "nullable": true
                  },
                  "volumeName": {
                    "type": "string",
                    "nullable": true
                  }
                },
                "required": [
                  "accessModes",
                  "resources"
                ],
                "type": "object",
                "nullable": true
              }
            },
            "required": [
              "dataVolumeClaimSpec"
            ],
            "type": "object"
          },
          "minItems": 1,
          "type": "array"
        },
        "metadata": {
          "properties": {
            "annotations": {
              "additionalProperties": {
                "type": "string"
              },
              "type": "object",
              "properties": {},
              "nullable": true
            },
            "labels": {
              "additionalProperties": {
                "type": "string"
              },
              "type": "object",
              "properties": {},
              "nullable": true
            }
          },
          "type": "object",
          "nullable": true
        },
        "monitoring": {
          "properties": {
            "pgmonitor": {
              "properties": {
                "exporter": {
                  "properties": {
                    "configuration": {
                      "items": {
                        "properties": {
                          "configMap": {
                            "properties": {
                              "items": {
                                "items": {
                                  "properties": {
                                    "key": {
                                      "type": "string"
                                    },
                                    "mode": {
                                      "format": "int32",
                                      "type": "integer",
                                      "nullable": true
                                    },
                                    "path": {
                                      "type": "string"
                                    }
                                  },
                                  "required": [
                                    "key",
                                    "path"
                                  ],
                                  "type": "object"
                                },
                                "type": "array",
                                "nullable": true
                              },
                              "name": {
                                "type": "string",
                                "nullable": true
                              },
                              "optional": {
                                "type": "boolean",
                                "nullable": true
                              }
                            },
                            "type": "object",
                            "nullable": true
                          },
                          "downwardAPI": {
                            "properties": {
                              "items": {
                                "items": {
                                  "properties": {
                                    "fieldRef": {
                                      "properties": {
                                        "apiVersion": {
                                          "type": "string",
                                          "nullable": true
                                        },
                                        "fieldPath": {
                                          "type": "string"
                                        }
                                      },
                                      "required": [
                                        "fieldPath"
                                      ],
                                      "type": "object",
                                      "nullable": true
                                    },
                                    "mode": {
                                      "format": "int32",
                                      "type": "integer",
                                      "nullable": true
                                    },
                                    "path": {
                                      "type": "string"
                                    },
                                    "resourceFieldRef": {
                                      "properties": {
                                        "containerName": {
                                          "type": "string",
                                          "nullable": true
                                        },
                                        "divisor": {
                                          "oneOf": [
                                            {
                                              "anyOf": [
                                                {
                                                  "type": "integer"
                                                },
                                                {
                                                  "type": "string"
                                                }
                                              ],
                                              "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                                            },
                                            {
                                              "type": "null"
                                            }
                                          ]
                                        },
                                        "resource": {
                                          "type": "string"
                                        }
                                      },
                                      "required": [
                                        "resource"
                                      ],
                                      "type": "object",
                                      "nullable": true
                                    }
                                  },
                                  "required": [
                                    "path"
                                  ],
                                  "type": "object"
                                },
                                "type": "array",
                                "nullable": true
                              }
                            },
                            "type": "object",
                            "nullable": true
                          },
                          "secret": {
                            "properties": {
                              "items": {
                                "items": {
                                  "properties": {
                                    "key": {
                                      "type": "string"
                                    },
                                    "mode": {
                                      "format": "int32",
                                      "type": "integer",
                                      "nullable": true
                                    },
                                    "path": {
                                      "type": "string"
                                    }
                                  },
                                  "required": [
                                    "key",
                                    "path"
                                  ],
                                  "type": "object"
                                },
                                "type": "array",
                                "nullable": true
                              },
                              "name": {
                                "type": "string",
                                "nullable": true
                              },
                              "optional": {
                                "type": "boolean",
                                "nullable": true
                              }
                            },
                            "type": "object",
                            "nullable": true
                          },
                          "serviceAccountToken": {
                            "properties": {
                              "audience": {
                                "type": "string",
                                "nullable": true
                              },
                              "expirationSeconds": {
                                "format": "int64",
                                "type": "integer",
                                "nullable": true
                              },
                              "path": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "path"
                            ],
                            "type": "object",
                            "nullable": true
                          }
                        },
                        "type": "object"
                      },
                      "type": "array",
                      "nullable": true
                    },
                    "image": {
                      "type": "string",
                      "nullable": true
                    },
                    "resources": {
                      "properties": {
                        "limits": {
                          "additionalProperties": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "string"
                              }
                            ],
                            "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                          },
                          "type": "object",
                          "properties": {},
                          "nullable": true
                        },
                        "requests": {
                          "additionalProperties": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "string"
                              }
                            ],
                            "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                          },
                          "type": "object",
                          "properties": {},
                          "nullable": true
                        }
                      },
                      "type": "object",
                      "nullable": true
                    }
                  },
                  "type": "object",
                  "nullable": true
                }
              },
              "type": "object",
              "nullable": true
            }
          },
          "type": "object",
          "nullable": true
        },
        "openshift": {
          "type": "boolean",
          "nullable": true
        },
        "patroni": {
          "properties": {
            "dynamicConfiguration": {
              "type": "object",
              "properties": {},
              "nullable": true
            },
            "leaderLeaseDurationSeconds": {
              "default": 30,
              "format": "int32",
              "type": "integer",
              "minimum": 3,
              "nullable": true
            },
            "port": {
              "default": 8008,
              "format": "int32",
              "type": "integer",
              "minimum": 1024,
              "nullable": true
            },
            "syncPeriodSeconds": {
              "default": 10,
              "format": "int32",
              "type": "integer",
              "minimum": 1,
              "nullable": true
            }
          },
          "type": "object",
          "nullable": true
        },
        "port": {
          "default": 5432,
          "format": "int32",
          "type": "integer",
          "minimum": 1024,
          "nullable": true
        },
        "postGISVersion": {
          "type": "string",
          "nullable": true
        },
        "postgresVersion": {
          "type": "integer",
          "minimum": 10,
          "maximum": 14
        },
        "proxy": {
          "properties": {
            "pgBouncer": {
              "properties": {
                "affinity": {
                  "properties": {
                    "nodeAffinity": {
                      "properties": {
                        "preferredDuringSchedulingIgnoredDuringExecution": {
                          "items": {
                            "properties": {
                              "preference": {
                                "properties": {
                                  "matchExpressions": {
                                    "items": {
                                      "properties": {
                                        "key": {
                                          "type": "string"
                                        },
                                        "operator": {
                                          "type": "string"
                                        },
                                        "values": {
                                          "items": {
                                            "type": "string"
                                          },
                                          "type": "array",
                                          "nullable": true
                                        }
                                      },
                                      "required": [
                                        "key",
                                        "operator"
                                      ],
                                      "type": "object"
                                    },
                                    "type": "array",
                                    "nullable": true
                                  },
                                  "matchFields": {
                                    "items": {
                                      "properties": {
                                        "key": {
                                          "type": "string"
                                        },
                                        "operator": {
                                          "type": "string"
                                        },
                                        "values": {
                                          "items": {
                                            "type": "string"
                                          },
                                          "type": "array",
                                          "nullable": true
                                        }
                                      },
                                      "required": [
                                        "key",
                                        "operator"
                                      ],
                                      "type": "object"
                                    },
                                    "type": "array",
                                    "nullable": true
                                  }
                                },
                                "type": "object"
                              },
                              "weight": {
                                "format": "int32",
                                "type": "integer"
                              }
                            },
                            "required": [
                              "preference",
                              "weight"
                            ],
                            "type": "object"
                          },
                          "type": "array",
                          "nullable": true
                        },
                        "requiredDuringSchedulingIgnoredDuringExecution": {
                          "properties": {
                            "nodeSelectorTerms": {
                              "items": {
                                "properties": {
                                  "matchExpressions": {
                                    "items": {
                                      "properties": {
                                        "key": {
                                          "type": "string"
                                        },
                                        "operator": {
                                          "type": "string"
                                        },
                                        "values": {
                                          "items": {
                                            "type": "string"
                                          },
                                          "type": "array",
                                          "nullable": true
                                        }
                                      },
                                      "required": [
                                        "key",
                                        "operator"
                                      ],
                                      "type": "object"
                                    },
                                    "type": "array",
                                    "nullable": true
                                  },
                                  "matchFields": {
                                    "items": {
                                      "properties": {
                                        "key": {
                                          "type": "string"
                                        },
                                        "operator": {
                                          "type": "string"
                                        },
                                        "values": {
                                          "items": {
                                            "type": "string"
                                          },
                                          "type": "array",
                                          "nullable": true
                                        }
                                      },
                                      "required": [
                                        "key",
                                        "operator"
                                      ],
                                      "type": "object"
                                    },
                                    "type": "array",
                                    "nullable": true
                                  }
                                },
                                "type": "object"
                              },
                              "type": "array"
                            }
                          },
                          "required": [
                            "nodeSelectorTerms"
                          ],
                          "type": "object",
                          "nullable": true
                        }
                      },
                      "type": "object",
                      "nullable": true
                    },
                    "podAffinity": {
                      "properties": {
                        "preferredDuringSchedulingIgnoredDuringExecution": {
                          "items": {
                            "properties": {
                              "podAffinityTerm": {
                                "properties": {
                                  "labelSelector": {
                                    "properties": {
                                      "matchExpressions": {
                                        "items": {
                                          "properties": {
                                            "key": {
                                              "type": "string"
                                            },
                                            "operator": {
                                              "type": "string"
                                            },
                                            "values": {
                                              "items": {
                                                "type": "string"
                                              },
                                              "type": "array",
                                              "nullable": true
                                            }
                                          },
                                          "required": [
                                            "key",
                                            "operator"
                                          ],
                                          "type": "object"
                                        },
                                        "type": "array",
                                        "nullable": true
                                      },
                                      "matchLabels": {
                                        "additionalProperties": {
                                          "type": "string"
                                        },
                                        "type": "object",
                                        "properties": {},
                                        "nullable": true
                                      }
                                    },
                                    "type": "object",
                                    "nullable": true
                                  },
                                  "namespaces": {
                                    "items": {
                                      "type": "string"
                                    },
                                    "type": "array",
                                    "nullable": true
                                  },
                                  "topologyKey": {
                                    "type": "string"
                                  }
                                },
                                "required": [
                                  "topologyKey"
                                ],
                                "type": "object"
                              },
                              "weight": {
                                "format": "int32",
                                "type": "integer"
                              }
                            },
                            "required": [
                              "podAffinityTerm",
                              "weight"
                            ],
                            "type": "object"
                          },
                          "type": "array",
                          "nullable": true
                        },
                        "requiredDuringSchedulingIgnoredDuringExecution": {
                          "items": {
                            "properties": {
                              "labelSelector": {
                                "properties": {
                                  "matchExpressions": {
                                    "items": {
                                      "properties": {
                                        "key": {
                                          "type": "string"
                                        },
                                        "operator": {
                                          "type": "string"
                                        },
                                        "values": {
                                          "items": {
                                            "type": "string"
                                          },
                                          "type": "array",
                                          "nullable": true
                                        }
                                      },
                                      "required": [
                                        "key",
                                        "operator"
                                      ],
                                      "type": "object"
                                    },
                                    "type": "array",
                                    "nullable": true
                                  },
                                  "matchLabels": {
                                    "additionalProperties": {
                                      "type": "string"
                                    },
                                    "type": "object",
                                    "properties": {},
                                    "nullable": true
                                  }
                                },
                                "type": "object",
                                "nullable": true
                              },
                              "namespaces": {
                                "items": {
                                  "type": "string"
                                },
                                "type": "array",
                                "nullable": true
                              },
                              "topologyKey": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "topologyKey"
                            ],
                            "type": "object"
                          },
                          "type": "array",
                          "nullable": true
                        }
                      },
                      "type": "object",
                      "nullable": true
                    },
                    "podAntiAffinity": {
                      "properties": {
                        "preferredDuringSchedulingIgnoredDuringExecution": {
                          "items": {
                            "properties": {
                              "podAffinityTerm": {
                                "properties": {
                                  "labelSelector": {
                                    "properties": {
                                      "matchExpressions": {
                                        "items": {
                                          "properties": {
                                            "key": {
                                              "type": "string"
                                            },
                                            "operator": {
                                              "type": "string"
                                            },
                                            "values": {
                                              "items": {
                                                "type": "string"
                                              },
                                              "type": "array",
                                              "nullable": true
                                            }
                                          },
                                          "required": [
                                            "key",
                                            "operator"
                                          ],
                                          "type": "object"
                                        },
                                        "type": "array",
                                        "nullable": true
                                      },
                                      "matchLabels": {
                                        "additionalProperties": {
                                          "type": "string"
                                        },
                                        "type": "object",
                                        "properties": {},
                                        "nullable": true
                                      }
                                    },
                                    "type": "object",
                                    "nullable": true
                                  },
                                  "namespaces": {
                                    "items": {
                                      "type": "string"
                                    },
                                    "type": "array",
                                    "nullable": true
                                  },
                                  "topologyKey": {
                                    "type": "string"
                                  }
                                },
                                "required": [
                                  "topologyKey"
                                ],
                                "type": "object"
                              },
                              "weight": {
                                "format": "int32",
                                "type": "integer"
                              }
                            },
                            "required": [
                              "podAffinityTerm",
                              "weight"
                            ],
                            "type": "object"
                          },
                          "type": "array",
                          "nullable": true
                        },
                        "requiredDuringSchedulingIgnoredDuringExecution": {
                          "items": {
                            "properties": {
                              "labelSelector": {
                                "properties": {
                                  "matchExpressions": {
                                    "items": {
                                      "properties": {
                                        "key": {
                                          "type": "string"
                                        },
                                        "operator": {
                                          "type": "string"
                                        },
                                        "values": {
                                          "items": {
                                            "type": "string"
                                          },
                                          "type": "array",
                                          "nullable": true
                                        }
                                      },
                                      "required": [
                                        "key",
                                        "operator"
                                      ],
                                      "type": "object"
                                    },
                                    "type": "array",
                                    "nullable": true
                                  },
                                  "matchLabels": {
                                    "additionalProperties": {
                                      "type": "string"
                                    },
                                    "type": "object",
                                    "properties": {},
                                    "nullable": true
                                  }
                                },
                                "type": "object",
                                "nullable": true
                              },
                              "namespaces": {
                                "items": {
                                  "type": "string"
                                },
                                "type": "array",
                                "nullable": true
                              },
                              "topologyKey": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "topologyKey"
                            ],
                            "type": "object"
                          },
                          "type": "array",
                          "nullable": true
                        }
                      },
                      "type": "object",
                      "nullable": true
                    }
                  },
                  "type": "object",
                  "nullable": true
                },
                "config": {
                  "properties": {
                    "databases": {
                      "additionalProperties": {
                        "type": "string"
                      },
                      "type": "object",
                      "properties": {},
                      "nullable": true
                    },
                    "files": {
                      "items": {
                        "properties": {
                          "configMap": {
                            "properties": {
                              "items": {
                                "items": {
                                  "properties": {
                                    "key": {
                                      "type": "string"
                                    },
                                    "mode": {
                                      "format": "int32",
                                      "type": "integer",
                                      "nullable": true
                                    },
                                    "path": {
                                      "type": "string"
                                    }
                                  },
                                  "required": [
                                    "key",
                                    "path"
                                  ],
                                  "type": "object"
                                },
                                "type": "array",
                                "nullable": true
                              },
                              "name": {
                                "type": "string",
                                "nullable": true
                              },
                              "optional": {
                                "type": "boolean",
                                "nullable": true
                              }
                            },
                            "type": "object",
                            "nullable": true
                          },
                          "downwardAPI": {
                            "properties": {
                              "items": {
                                "items": {
                                  "properties": {
                                    "fieldRef": {
                                      "properties": {
                                        "apiVersion": {
                                          "type": "string",
                                          "nullable": true
                                        },
                                        "fieldPath": {
                                          "type": "string"
                                        }
                                      },
                                      "required": [
                                        "fieldPath"
                                      ],
                                      "type": "object",
                                      "nullable": true
                                    },
                                    "mode": {
                                      "format": "int32",
                                      "type": "integer",
                                      "nullable": true
                                    },
                                    "path": {
                                      "type": "string"
                                    },
                                    "resourceFieldRef": {
                                      "properties": {
                                        "containerName": {
                                          "type": "string",
                                          "nullable": true
                                        },
                                        "divisor": {
                                          "oneOf": [
                                            {
                                              "anyOf": [
                                                {
                                                  "type": "integer"
                                                },
                                                {
                                                  "type": "string"
                                                }
                                              ],
                                              "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                                            },
                                            {
                                              "type": "null"
                                            }
                                          ]
                                        },
                                        "resource": {
                                          "type": "string"
                                        }
                                      },
                                      "required": [
                                        "resource"
                                      ],
                                      "type": "object",
                                      "nullable": true
                                    }
                                  },
                                  "required": [
                                    "path"
                                  ],
                                  "type": "object"
                                },
                                "type": "array",
                                "nullable": true
                              }
                            },
                            "type": "object",
                            "nullable": true
                          },
                          "secret": {
                            "properties": {
                              "items": {
                                "items": {
                                  "properties": {
                                    "key": {
                                      "type": "string"
                                    },
                                    "mode": {
                                      "format": "int32",
                                      "type": "integer",
                                      "nullable": true
                                    },
                                    "path": {
                                      "type": "string"
                                    }
                                  },
                                  "required": [
                                    "key",
                                    "path"
                                  ],
                                  "type": "object"
                                },
                                "type": "array",
                                "nullable": true
                              },
                              "name": {
                                "type": "string",
                                "nullable": true
                              },
                              "optional": {
                                "type": "boolean",
                                "nullable": true
                              }
                            },
                            "type": "object",
                            "nullable": true
                          },
                          "serviceAccountToken": {
                            "properties": {
                              "audience": {
                                "type": "string",
                                "nullable": true
                              },
                              "expirationSeconds": {
                                "format": "int64",
                                "type": "integer",
                                "nullable": true
                              },
                              "path": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "path"
                            ],
                            "type": "object",
                            "nullable": true
                          }
                        },
                        "type": "object"
                      },
                      "type": "array",
                      "nullable": true
                    },
                    "global": {
                      "additionalProperties": {
                        "type": "string"
                      },
                      "type": "object",
                      "properties": {},
                      "nullable": true
                    },
                    "users": {
                      "additionalProperties": {
                        "type": "string"
                      },
                      "type": "object",
                      "properties": {},
                      "nullable": true
                    }
                  },
                  "type": "object",
                  "nullable": true
                },
                "customTLSSecret": {
                  "properties": {
                    "items": {
                      "items": {
                        "properties": {
                          "key": {
                            "type": "string"
                          },
                          "mode": {
                            "format": "int32",
                            "type": "integer",
                            "nullable": true
                          },
                          "path": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "key",
                          "path"
                        ],
                        "type": "object"
                      },
                      "type": "array",
                      "nullable": true
                    },
                    "name": {
                      "type": "string",
                      "nullable": true
                    },
                    "optional": {
                      "type": "boolean",
                      "nullable": true
                    }
                  },
                  "type": "object",
                  "nullable": true
                },
                "image": {
                  "type": "string",
                  "nullable": true
                },
                "metadata": {
                  "properties": {
                    "annotations": {
                      "additionalProperties": {
                        "type": "string"
                      },
                      "type": "object",
                      "properties": {},
                      "nullable": true
                    },
                    "labels": {
                      "additionalProperties": {
                        "type": "string"
                      },
                      "type": "object",
                      "properties": {},
                      "nullable": true
                    }
                  },
                  "type": "object",
                  "nullable": true
                },
                "port": {
                  "default": 5432,
                  "format": "int32",
                  "type": "integer",
                  "minimum": 1024,
                  "nullable": true
                },
                "priorityClassName": {
                  "type": "string",
                  "nullable": true
                },
                "replicas": {
                  "default": 1,
                  "format": "int32",
                  "type": "integer",
                  "minimum": 0,
                  "nullable": true
                },
                "resources": {
                  "properties": {
                    "limits": {
                      "additionalProperties": {
                        "anyOf": [
                          {
                            "type": "integer"
                          },
                          {
                            "type": "string"
                          }
                        ],
                        "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                      },
                      "type": "object",
                      "properties": {},
                      "nullable": true
                    },
                    "requests": {
                      "additionalProperties": {
                        "anyOf": [
                          {
                            "type": "integer"
                          },
                          {
                            "type": "string"
                          }
                        ],
                        "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                      },
                      "type": "object",
                      "properties": {},
                      "nullable": true
                    }
                  },
                  "type": "object",
                  "nullable": true
                },
                "service": {
                  "properties": {
                    "type": {
                      "enum": [
                        "ClusterIP",
                        "NodePort",
                        "LoadBalancer"
                      ],
                      "type": "string"
                    }
                  },
                  "required": [
                    "type"
                  ],
                  "type": "object",
                  "nullable": true
                },
                "sidecars": {
                  "properties": {
                    "pgbouncerConfig": {
                      "properties": {
                        "resources": {
                          "properties": {
                            "limits": {
                              "additionalProperties": {
                                "anyOf": [
                                  {
                                    "type": "integer"
                                  },
                                  {
                                    "type": "string"
                                  }
                                ],
                                "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                              },
                              "type": "object",
                              "properties": {},
                              "nullable": true
                            },
                            "requests": {
                              "additionalProperties": {
                                "anyOf": [
                                  {
                                    "type": "integer"
                                  },
                                  {
                                    "type": "string"
                                  }
                                ],
                                "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
                              },
                              "type": "object",
                              "properties": {},
                              "nullable": true
                            }
                          },
                          "type": "object",
                          "nullable": true
                        }
                      },
                      "type": "object",
                      "nullable": true
                    }
                  },
                  "type": "object",
                  "nullable": true
                },
                "tolerations": {
                  "items": {
                    "properties": {
                      "effect": {
                        "type": "string",
                        "nullable": true
                      },
                      "key": {
                        "type": "string",
                        "nullable": true
                      },
                      "operator": {
                        "type": "string",
                        "nullable": true
                      },
                      "tolerationSeconds": {
                        "format": "int64",
                        "type": "integer",
                        "nullable": true
                      },
                      "value": {
                        "type": "string",
                        "nullable": true
                      }
                    },
                    "type": "object"
                  },
                  "type": "array",
                  "nullable": true
                },
                "topologySpreadConstraints": {
                  "items": {
                    "properties": {
                      "labelSelector": {
                        "properties": {
                          "matchExpressions": {
                            "items": {
                              "properties": {
                                "key": {
                                  "type": "string"
                                },
                                "operator": {
                                  "type": "string"
                                },
                                "values": {
                                  "items": {
                                    "type": "string"
                                  },
                                  "type": "array",
                                  "nullable": true
                                }
                              },
                              "required": [
                                "key",
                                "operator"
                              ],
                              "type": "object"
                            },
                            "type": "array",
                            "nullable": true
                          },
                          "matchLabels": {
                            "additionalProperties": {
                              "type": "string"
                            },
                            "type": "object",
                            "properties": {},
                            "nullable": true
                          }
                        },
                        "type": "object",
                        "nullable": true
                      },
                      "maxSkew": {
                        "format": "int32",
                        "type": "integer"
                      },
                      "topologyKey": {
                        "type": "string"
                      },
                      "whenUnsatisfiable": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "maxSkew",
                      "topologyKey",
                      "whenUnsatisfiable"
                    ],
                    "type": "object"
                  },
                  "type": "array",
                  "nullable": true
                }
              },
              "type": "object"
            }
          },
          "required": [
            "pgBouncer"
          ],
          "type": "object",
          "nullable": true
        },
        "service": {
          "properties": {
            "type": {
              "enum": [
                "ClusterIP",
                "NodePort",
                "LoadBalancer"
              ],
              "type": "string"
            }
          },
          "required": [
            "type"
          ],
          "type": "object",
          "nullable": true
        },
        "shutdown": {
          "type": "boolean",
          "nullable": true
        },
        "standby": {
          "properties": {
            "enabled": {
              "default": true,
              "type": "boolean",
              "nullable": true
            },
            "repoName": {
              "pattern": "^repo[1-4]",
              "type": "string"
            }
          },
          "required": [
            "repoName"
          ],
          "type": "object",
          "nullable": true
        },
        "supplementalGroups": {
          "items": {
            "format": "int64",
            "type": "integer",
            "minimum": 1,
            "maximum": 2147483647
          },
          "type": "array",
          "nullable": true
        },
        "users": {
          "items": {
            "properties": {
              "databases": {
                "items": {
                  "maxLength": 63,
                  "minLength": 1,
                  "type": "string"
                },
                "type": "array",
                "nullable": true
              },
              "name": {
                "maxLength": 63,
                "minLength": 1,
                "pattern": "^[a-z0-9]([-a-z0-9]*[a-z0-9])?$",
                "type": "string"
              },
              "options": {
                "pattern": "^[^;]*$",
                "type": "string",
                "nullable": true
              }
            },
            "required": [
              "name"
            ],
            "type": "object"
          },
          "type": "array",
          "nullable": true
        }
      },
      "required": [
        "backups",
        "instances",
        "postgresVersion"
      ],
      "type": "object",
      "nullable": true
    },
    "status": {
      "properties": {
        "conditions": {
          "items": {
            "properties": {
              "lastTransitionTime": {
                "format": "date-time",
                "type": "string"
              },
              "message": {
                "maxLength": 32768,
                "type": "string"
              },
              "observedGeneration": {
                "format": "int64",
                "type": "integer",
                "minimum": 0,
                "nullable": true
              },
              "reason": {
                "maxLength": 1024,
                "minLength": 1,
                "pattern": "^[A-Za-z]([A-Za-z0-9_,:]*[A-Za-z0-9_])?$",
                "type": "string"
              },
              "status": {
                "enum": [
                  "True",
                  "False",
                  "Unknown"
                ],
                "type": "string"
              },
              "type": {
                "maxLength": 316,
                "pattern": "^([a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*/)?(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])$",
                "type": "string"
              }
            },
            "required": [
              "lastTransitionTime",
              "message",
              "reason",
              "status",
              "type"
            ],
            "type": "object"
          },
          "type": "array",
          "nullable": true
        },
        "databaseInitSQL": {
          "type": "string",
          "nullable": true
        },
        "databaseRevision": {
          "type": "string",
          "nullable": true
        },
        "instances": {
          "items": {
            "properties": {
              "name": {
                "type": "string"
              },
              "readyReplicas": {
                "format": "int32",
                "type": "integer",
                "nullable": true
              },
              "replicas": {
                "format": "int32",
                "type": "integer",
                "nullable": true
              },
              "updatedReplicas": {
                "format": "int32",
                "type": "integer",
                "nullable": true
              }
            },
            "required": [
              "name"
            ],
            "type": "object"
          },
          "type": "array",
          "nullable": true
        },
        "monitoring": {
          "properties": {
            "exporterConfiguration": {
              "type": "string",
              "nullable": true
            }
          },
          "type": "object",
          "nullable": true
        },
        "observedGeneration": {
          "format": "int64",
          "type": "integer",
          "minimum": 0,
          "nullable": true
        },
        "patroni": {
          "properties": {
            "systemIdentifier": {
              "type": "string",
              "nullable": true
            }
          },
          "type": "object",
          "nullable": true
        },
        "pgbackrest": {
          "properties": {
            "manualBackup": {
              "properties": {
                "active": {
                  "format": "int32",
                  "type": "integer",
                  "nullable": true
                },
                "completionTime": {
                  "format": "date-time",
                  "type": "string",
                  "nullable": true
                },
                "failed": {
                  "format": "int32",
                  "type": "integer",
                  "nullable": true
                },
                "finished": {
                  "type": "boolean"
                },
                "id": {
                  "type": "string"
                },
                "startTime": {
                  "format": "date-time",
                  "type": "string",
                  "nullable": true
                },
                "succeeded": {
                  "format": "int32",
                  "type": "integer",
                  "nullable": true
                }
              },
              "required": [
                "finished",
                "id"
              ],
              "type": "object",
              "nullable": true
            },
            "repoHost": {
              "properties": {
                "apiVersion": {
                  "type": "string",
                  "nullable": true
                },
                "kind": {
                  "type": "string",
                  "nullable": true
                },
                "ready": {
                  "type": "boolean",
                  "nullable": true
                }
              },
              "type": "object",
              "nullable": true
            },
            "repos": {
              "items": {
                "properties": {
                  "bound": {
                    "type": "boolean",
                    "nullable": true
                  },
                  "name": {
                    "type": "string"
                  },
                  "replicaCreateBackupComplete": {
                    "type": "boolean",
                    "nullable": true
                  },
                  "repoOptionsHash": {
                    "type": "string",
                    "nullable": true
                  },
                  "stanzaCreated": {
                    "type": "boolean",
                    "nullable": true
                  },
                  "volume": {
                    "type": "string",
                    "nullable": true
                  }
                },
                "required": [
                  "name"
                ],
                "type": "object"
              },
              "type": "array",
              "nullable": true
            },
            "restore": {
              "properties": {
                "active": {
                  "format": "int32",
                  "type": "integer",
                  "nullable": true
                },
                "completionTime": {
                  "format": "date-time",
                  "type": "string",
                  "nullable": true
                },
                "failed": {
                  "format": "int32",
                  "type": "integer",
                  "nullable": true
                },
                "finished": {
                  "type": "boolean"
                },
                "id": {
                  "type": "string"
                },
                "startTime": {
                  "format": "date-time",
                  "type": "string",
                  "nullable": true
                },
                "succeeded": {
                  "format": "int32",
                  "type": "integer",
                  "nullable": true
                }
              },
              "required": [
                "finished",
                "id"
              ],
              "type": "object",
              "nullable": true
            },
            "scheduledBackups": {
              "items": {
                "properties": {
                  "active": {
                    "format": "int32",
                    "type": "integer",
                    "nullable": true
                  },
                  "completionTime": {
                    "format": "date-time",
                    "type": "string",
                    "nullable": true
                  },
                  "cronJobName": {
                    "type": "string",
                    "nullable": true
                  },
                  "failed": {
                    "format": "int32",
                    "type": "integer",
                    "nullable": true
                  },
                  "repo": {
                    "type": "string",
                    "nullable": true
                  },
                  "startTime": {
                    "format": "date-time",
                    "type": "string",
                    "nullable": true
                  },
                  "succeeded": {
                    "format": "int32",
                    "type": "integer",
                    "nullable": true
                  },
                  "type": {
                    "type": "string",
                    "nullable": true
                  }
                },
                "type": "object"
              },
              "type": "array",
              "nullable": true
            }
          },
          "type": "object",
          "nullable": true
        },
        "proxy": {
          "properties": {
            "pgBouncer": {
              "properties": {
                "postgresRevision": {
                  "type": "string",
                  "nullable": true
                },
                "readyReplicas": {
                  "format": "int32",
                  "type": "integer",
                  "nullable": true
                },
                "replicas": {
                  "format": "int32",
                  "type": "integer",
                  "nullable": true
                }
              },
              "type": "object",
              "nullable": true
            }
          },
          "type": "object",
          "nullable": true
        },
        "startupInstance": {
          "type": "string",
          "nullable": true
        },
        "startupInstanceSet": {
          "type": "string",
          "nullable": true
        },
        "usersRevision": {
          "type": "string",
          "nullable": true
        }
      },
      "type": "object",
      "nullable": true
    }
  },
  "required": [
    "apiVersion",
    "kind"
  ]
};

/**
 * PostgresCluster is the Schema for the postgresclusters API
 */
export interface IPostgresCluster {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "postgres-operator.crunchydata.com/v1beta1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "PostgresCluster";
  "metadata"?: IObjectMeta;
  /**
   * PostgresClusterSpec defines the desired state of PostgresCluster
   */
  "spec"?: {
    /**
     * PostgreSQL backup configuration
     */
    "backups": {
      /**
       * pgBackRest archive configuration
       */
      "pgbackrest": {
        /**
         * Projected volumes containing custom pgBackRest configuration.  These files are mounted under "/etc/pgbackrest/conf.d" alongside any pgBackRest configuration generated by the PostgreSQL Operator: https://pgbackrest.org/configuration.html
         */
        "configuration"?: Array<{
          /**
           * information about the configMap data to project
           */
          "configMap"?: {
            /**
             * If unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
             */
            "items"?: Array<{
              /**
               * The key to project.
               */
              "key": string;
              /**
               * Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
               */
              "mode"?: number;
              /**
               * The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
               */
              "path": string;
            }>;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
             */
            "name"?: string;
            /**
             * Specify whether the ConfigMap or its keys must be defined
             */
            "optional"?: boolean;
          };
          /**
           * information about the downwardAPI data to project
           */
          "downwardAPI"?: {
            /**
             * Items is a list of DownwardAPIVolume file
             */
            "items"?: Array<{
              /**
               * Required: Selects a field of the pod: only annotations, labels, name and namespace are supported.
               */
              "fieldRef"?: {
                /**
                 * Version of the schema the FieldPath is written in terms of, defaults to "v1".
                 */
                "apiVersion"?: string;
                /**
                 * Path of the field to select in the specified API version.
                 */
                "fieldPath": string;
              };
              /**
               * Optional: mode bits used to set permissions on this file, must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
               */
              "mode"?: number;
              /**
               * Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
               */
              "path": string;
              /**
               * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.
               */
              "resourceFieldRef"?: {
                /**
                 * Container name: required for volumes, optional for env vars
                 */
                "containerName"?: string;
                /**
                 * Specifies the output format of the exposed resources, defaults to "1"
                 */
                "divisor"?: any;
                /**
                 * Required: resource to select
                 */
                "resource": string;
              };
            }>;
          };
          /**
           * information about the secret data to project
           */
          "secret"?: {
            /**
             * If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
             */
            "items"?: Array<{
              /**
               * The key to project.
               */
              "key": string;
              /**
               * Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
               */
              "mode"?: number;
              /**
               * The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
               */
              "path": string;
            }>;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
             */
            "name"?: string;
            /**
             * Specify whether the Secret or its key must be defined
             */
            "optional"?: boolean;
          };
          /**
           * information about the serviceAccountToken data to project
           */
          "serviceAccountToken"?: {
            /**
             * Audience is the intended audience of the token. A recipient of a token must identify itself with an identifier specified in the audience of the token, and otherwise should reject the token. The audience defaults to the identifier of the apiserver.
             */
            "audience"?: string;
            /**
             * ExpirationSeconds is the requested duration of validity of the service account token. As the token approaches expiration, the kubelet volume plugin will proactively rotate the service account token. The kubelet will start trying to rotate the token if the token is older than 80 percent of its time to live or if the token is older than 24 hours.Defaults to 1 hour and must be at least 10 minutes.
             */
            "expirationSeconds"?: number;
            /**
             * Path is the path relative to the mount point of the file to project the token into.
             */
            "path": string;
          };
        }>;
        /**
         * Global pgBackRest configuration settings.  These settings are included in the "global" section of the pgBackRest configuration generated by the PostgreSQL Operator, and then mounted under "/etc/pgbackrest/conf.d": https://pgbackrest.org/configuration.html
         */
        "global"?: {
          [key: string]: string;
        };
        /**
         * The image name to use for pgBackRest containers.  Utilized to run pgBackRest repository hosts and backups. The image may also be set using the RELATED_IMAGE_PGBACKREST environment variable
         */
        "image"?: string;
        /**
         * Jobs field allows configuration for all backup jobs
         */
        "jobs"?: {
          /**
           * Priority class name for the pgBackRest backup Job pods. Changing this value causes PostgreSQL to restart. More info: https://kubernetes.io/docs/concepts/scheduling-eviction/pod-priority-preemption/
           */
          "priorityClassName"?: string;
          /**
           * Resource limits for backup jobs. Includes manual, scheduled and replica create backups
           */
          "resources"?: {
            /**
             * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
             */
            "limits"?: {
              [key: string]: any;
            };
            /**
             * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
             */
            "requests"?: {
              [key: string]: any;
            };
          };
        };
        /**
         * Defines details for manual pgBackRest backup Jobs
         */
        "manual"?: {
          /**
           * Command line options to include when running the pgBackRest backup command. https://pgbackrest.org/command.html#command-backup
           */
          "options"?: Array<string>;
          /**
           * The name of the pgBackRest repo to run the backup command against.
           */
          "repoName": string;
        };
        /**
         * Metadata contains metadata for PostgresCluster resources
         */
        "metadata"?: {
          "annotations"?: {
            [key: string]: string;
          };
          "labels"?: {
            [key: string]: string;
          };
        };
        /**
         * Defines configuration for a pgBackRest dedicated repository host.  This section is only applicable if at least one "volume" (i.e. PVC-based) repository is defined in the "repos" section, therefore enabling a dedicated repository host Deployment.
         */
        "repoHost"?: {
          /**
           * Scheduling constraints of the Dedicated repo host pod. Changing this value causes repo host to restart. More info: https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node
           */
          "affinity"?: {
            /**
             * Describes node affinity scheduling rules for the pod.
             */
            "nodeAffinity"?: {
              /**
               * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred.
               */
              "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
                /**
                 * A node selector term, associated with the corresponding weight.
                 */
                "preference": {
                  /**
                   * A list of node selector requirements by node's labels.
                   */
                  "matchExpressions"?: Array<{
                    /**
                     * The label key that the selector applies to.
                     */
                    "key": string;
                    /**
                     * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                     */
                    "operator": string;
                    /**
                     * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                     */
                    "values"?: Array<string>;
                  }>;
                  /**
                   * A list of node selector requirements by node's fields.
                   */
                  "matchFields"?: Array<{
                    /**
                     * The label key that the selector applies to.
                     */
                    "key": string;
                    /**
                     * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                     */
                    "operator": string;
                    /**
                     * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                     */
                    "values"?: Array<string>;
                  }>;
                };
                /**
                 * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
                 */
                "weight": number;
              }>;
              /**
               * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to an update), the system may or may not try to eventually evict the pod from its node.
               */
              "requiredDuringSchedulingIgnoredDuringExecution"?: {
                /**
                 * Required. A list of node selector terms. The terms are ORed.
                 */
                "nodeSelectorTerms": Array<{
                  /**
                   * A list of node selector requirements by node's labels.
                   */
                  "matchExpressions"?: Array<{
                    /**
                     * The label key that the selector applies to.
                     */
                    "key": string;
                    /**
                     * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                     */
                    "operator": string;
                    /**
                     * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                     */
                    "values"?: Array<string>;
                  }>;
                  /**
                   * A list of node selector requirements by node's fields.
                   */
                  "matchFields"?: Array<{
                    /**
                     * The label key that the selector applies to.
                     */
                    "key": string;
                    /**
                     * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                     */
                    "operator": string;
                    /**
                     * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                     */
                    "values"?: Array<string>;
                  }>;
                }>;
              };
            };
            /**
             * Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).
             */
            "podAffinity"?: {
              /**
               * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
               */
              "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
                /**
                 * Required. A pod affinity term, associated with the corresponding weight.
                 */
                "podAffinityTerm": {
                  /**
                   * A label query over a set of resources, in this case pods.
                   */
                  "labelSelector"?: {
                    /**
                     * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                     */
                    "matchExpressions"?: Array<{
                      /**
                       * key is the label key that the selector applies to.
                       */
                      "key": string;
                      /**
                       * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                       */
                      "operator": string;
                      /**
                       * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                       */
                      "values"?: Array<string>;
                    }>;
                    /**
                     * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                     */
                    "matchLabels"?: {
                      [key: string]: string;
                    };
                  };
                  /**
                   * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means "this pod's namespace"
                   */
                  "namespaces"?: Array<string>;
                  /**
                   * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
                   */
                  "topologyKey": string;
                };
                /**
                 * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
                 */
                "weight": number;
              }>;
              /**
               * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
               */
              "requiredDuringSchedulingIgnoredDuringExecution"?: Array<{
                /**
                 * A label query over a set of resources, in this case pods.
                 */
                "labelSelector"?: {
                  /**
                   * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                   */
                  "matchExpressions"?: Array<{
                    /**
                     * key is the label key that the selector applies to.
                     */
                    "key": string;
                    /**
                     * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                     */
                    "operator": string;
                    /**
                     * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                     */
                    "values"?: Array<string>;
                  }>;
                  /**
                   * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                   */
                  "matchLabels"?: {
                    [key: string]: string;
                  };
                };
                /**
                 * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means "this pod's namespace"
                 */
                "namespaces"?: Array<string>;
                /**
                 * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
                 */
                "topologyKey": string;
              }>;
            };
            /**
             * Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).
             */
            "podAntiAffinity"?: {
              /**
               * The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
               */
              "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
                /**
                 * Required. A pod affinity term, associated with the corresponding weight.
                 */
                "podAffinityTerm": {
                  /**
                   * A label query over a set of resources, in this case pods.
                   */
                  "labelSelector"?: {
                    /**
                     * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                     */
                    "matchExpressions"?: Array<{
                      /**
                       * key is the label key that the selector applies to.
                       */
                      "key": string;
                      /**
                       * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                       */
                      "operator": string;
                      /**
                       * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                       */
                      "values"?: Array<string>;
                    }>;
                    /**
                     * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                     */
                    "matchLabels"?: {
                      [key: string]: string;
                    };
                  };
                  /**
                   * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means "this pod's namespace"
                   */
                  "namespaces"?: Array<string>;
                  /**
                   * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
                   */
                  "topologyKey": string;
                };
                /**
                 * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
                 */
                "weight": number;
              }>;
              /**
               * If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
               */
              "requiredDuringSchedulingIgnoredDuringExecution"?: Array<{
                /**
                 * A label query over a set of resources, in this case pods.
                 */
                "labelSelector"?: {
                  /**
                   * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                   */
                  "matchExpressions"?: Array<{
                    /**
                     * key is the label key that the selector applies to.
                     */
                    "key": string;
                    /**
                     * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                     */
                    "operator": string;
                    /**
                     * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                     */
                    "values"?: Array<string>;
                  }>;
                  /**
                   * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                   */
                  "matchLabels"?: {
                    [key: string]: string;
                  };
                };
                /**
                 * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means "this pod's namespace"
                 */
                "namespaces"?: Array<string>;
                /**
                 * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
                 */
                "topologyKey": string;
              }>;
            };
          };
          /**
           * Priority class name for the pgBackRest repo host pod. Changing this value causes PostgreSQL to restart. More info: https://kubernetes.io/docs/concepts/scheduling-eviction/pod-priority-preemption/
           */
          "priorityClassName"?: string;
          /**
           * Resource requirements for a pgBackRest repository host
           */
          "resources"?: {
            /**
             * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
             */
            "limits"?: {
              [key: string]: any;
            };
            /**
             * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
             */
            "requests"?: {
              [key: string]: any;
            };
          };
          /**
           * ConfigMap containing custom SSH configuration
           */
          "sshConfigMap"?: {
            /**
             * If unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
             */
            "items"?: Array<{
              /**
               * The key to project.
               */
              "key": string;
              /**
               * Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
               */
              "mode"?: number;
              /**
               * The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
               */
              "path": string;
            }>;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
             */
            "name"?: string;
            /**
             * Specify whether the ConfigMap or its keys must be defined
             */
            "optional"?: boolean;
          };
          /**
           * Secret containing custom SSH keys
           */
          "sshSecret"?: {
            /**
             * If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
             */
            "items"?: Array<{
              /**
               * The key to project.
               */
              "key": string;
              /**
               * Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
               */
              "mode"?: number;
              /**
               * The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
               */
              "path": string;
            }>;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
             */
            "name"?: string;
            /**
             * Specify whether the Secret or its key must be defined
             */
            "optional"?: boolean;
          };
          /**
           * Tolerations of a PgBackRest repo host pod. Changing this value causes a restart. More info: https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration
           */
          "tolerations"?: Array<{
            /**
             * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
             */
            "effect"?: string;
            /**
             * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
             */
            "key"?: string;
            /**
             * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
             */
            "operator"?: string;
            /**
             * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
             */
            "tolerationSeconds"?: number;
            /**
             * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
             */
            "value"?: string;
          }>;
          /**
           * Topology spread constraints of a Dedicated repo host pod. Changing this value causes the repo host to restart. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-topology-spread-constraints/
           */
          "topologySpreadConstraints"?: Array<{
            /**
             * LabelSelector is used to find matching pods. Pods that match this label selector are counted to determine the number of pods in their corresponding topology domain.
             */
            "labelSelector"?: {
              /**
               * matchExpressions is a list of label selector requirements. The requirements are ANDed.
               */
              "matchExpressions"?: Array<{
                /**
                 * key is the label key that the selector applies to.
                 */
                "key": string;
                /**
                 * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                 */
                "operator": string;
                /**
                 * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                 */
                "values"?: Array<string>;
              }>;
              /**
               * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
               */
              "matchLabels"?: {
                [key: string]: string;
              };
            };
            /**
             * MaxSkew describes the degree to which pods may be unevenly distributed. When `whenUnsatisfiable=DoNotSchedule`, it is the maximum permitted difference between the number of matching pods in the target topology and the global minimum. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 1/1/0: | zone1 | zone2 | zone3 | |   P   |   P   |       | - if MaxSkew is 1, incoming pod can only be scheduled to zone3 to become 1/1/1; scheduling it onto zone1(zone2) would make the ActualSkew(2-0) on zone1(zone2) violate MaxSkew(1). - if MaxSkew is 2, incoming pod can be scheduled onto any zone. When `whenUnsatisfiable=ScheduleAnyway`, it is used to give higher precedence to topologies that satisfy it. It's a required field. Default value is 1 and 0 is not allowed.
             */
            "maxSkew": number;
            /**
             * TopologyKey is the key of node labels. Nodes that have a label with this key and identical values are considered to be in the same topology. We consider each <key, value> as a "bucket", and try to put balanced number of pods into each bucket. It's a required field.
             */
            "topologyKey": string;
            /**
             * WhenUnsatisfiable indicates how to deal with a pod if it doesn't satisfy the spread constraint. - DoNotSchedule (default) tells the scheduler not to schedule it. - ScheduleAnyway tells the scheduler to schedule the pod in any location,   but giving higher precedence to topologies that would help reduce the   skew. A constraint is considered "Unsatisfiable" for an incoming pod if and only if every possible node assigment for that pod would violate "MaxSkew" on some topology. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 3/1/1: | zone1 | zone2 | zone3 | | P P P |   P   |   P   | If WhenUnsatisfiable is set to DoNotSchedule, incoming pod can only be scheduled to zone2(zone3) to become 3/2/1(3/1/2) as ActualSkew(2-1) on zone2(zone3) satisfies MaxSkew(1). In other words, the cluster can still be imbalanced, but scheduler won't make it \*more\* imbalanced. It's a required field.
             */
            "whenUnsatisfiable": string;
          }>;
        };
        /**
         * Defines a pgBackRest repository
         */
        "repos": Array<{
          /**
           * Represents a pgBackRest repository that is created using Azure storage
           */
          "azure"?: {
            /**
             * The Azure container utilized for the repository
             */
            "container": string;
          };
          /**
           * Represents a pgBackRest repository that is created using Google Cloud Storage
           */
          "gcs"?: {
            /**
             * The GCS bucket utilized for the repository
             */
            "bucket": string;
          };
          /**
           * The name of the the repository
           */
          "name": string;
          /**
           * RepoS3 represents a pgBackRest repository that is created using AWS S3 (or S3-compatible) storage
           */
          "s3"?: {
            /**
             * The S3 bucket utilized for the repository
             */
            "bucket": string;
            /**
             * A valid endpoint corresponding to the specified region
             */
            "endpoint": string;
            /**
             * The region corresponding to the S3 bucket
             */
            "region": string;
          };
          /**
           * Defines the schedules for the pgBackRest backups Full, Differential and Incremental backup types are supported: https://pgbackrest.org/user-guide.html#concept/backup
           */
          "schedules"?: {
            /**
             * Defines the Cron schedule for a differential pgBackRest backup. Follows the standard Cron schedule syntax: https://k8s.io/docs/concepts/workloads/controllers/cron-jobs/#cron-schedule-syntax
             */
            "differential"?: string;
            /**
             * Defines the Cron schedule for a full pgBackRest backup. Follows the standard Cron schedule syntax: https://k8s.io/docs/concepts/workloads/controllers/cron-jobs/#cron-schedule-syntax
             */
            "full"?: string;
            /**
             * Defines the Cron schedule for an incremental pgBackRest backup. Follows the standard Cron schedule syntax: https://k8s.io/docs/concepts/workloads/controllers/cron-jobs/#cron-schedule-syntax
             */
            "incremental"?: string;
          };
          /**
           * Represents a pgBackRest repository that is created using a PersistentVolumeClaim
           */
          "volume"?: {
            /**
             * Defines a PersistentVolumeClaim spec used to create and/or bind a volume
             */
            "volumeClaimSpec": {
              /**
               * AccessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
               */
              "accessModes": Array<string>;
              /**
               * This field can be used to specify either: \* An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot) \* An existing PVC (PersistentVolumeClaim) \* An existing custom resource that implements data population (Alpha) In order to use custom resource types that implement data population, the AnyVolumeDataSource feature gate must be enabled. If the provisioner or an external controller can support the specified data source, it will create a new volume based on the contents of the specified data source.
               */
              "dataSource"?: {
                /**
                 * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
                 */
                "apiGroup"?: string;
                /**
                 * Kind is the type of resource being referenced
                 */
                "kind": string;
                /**
                 * Name is the name of resource being referenced
                 */
                "name": string;
              };
              /**
               * Resources represents the minimum resources the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
               */
              "resources": {
                /**
                 * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
                 */
                "limits"?: {
                  [key: string]: any;
                };
                /**
                 * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
                 */
                "requests": {
                  [key: string]: any;
                };
              };
              /**
               * A label query over volumes to consider for binding.
               */
              "selector"?: {
                /**
                 * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                 */
                "matchExpressions"?: Array<{
                  /**
                   * key is the label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                   */
                  "operator": string;
                  /**
                   * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
                /**
                 * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                 */
                "matchLabels"?: {
                  [key: string]: string;
                };
              };
              /**
               * Name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
               */
              "storageClassName"?: string;
              /**
               * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
               */
              "volumeMode"?: string;
              /**
               * VolumeName is the binding reference to the PersistentVolume backing this claim.
               */
              "volumeName"?: string;
            };
          };
        }>;
        /**
         * Defines details for performing an in-place restore using pgBackRest
         */
        "restore"?: {
          /**
           * Scheduling constraints of the pgBackRest restore Job. More info: https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node
           */
          "affinity"?: {
            /**
             * Describes node affinity scheduling rules for the pod.
             */
            "nodeAffinity"?: {
              /**
               * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred.
               */
              "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
                /**
                 * A node selector term, associated with the corresponding weight.
                 */
                "preference": {
                  /**
                   * A list of node selector requirements by node's labels.
                   */
                  "matchExpressions"?: Array<{
                    /**
                     * The label key that the selector applies to.
                     */
                    "key": string;
                    /**
                     * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                     */
                    "operator": string;
                    /**
                     * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                     */
                    "values"?: Array<string>;
                  }>;
                  /**
                   * A list of node selector requirements by node's fields.
                   */
                  "matchFields"?: Array<{
                    /**
                     * The label key that the selector applies to.
                     */
                    "key": string;
                    /**
                     * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                     */
                    "operator": string;
                    /**
                     * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                     */
                    "values"?: Array<string>;
                  }>;
                };
                /**
                 * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
                 */
                "weight": number;
              }>;
              /**
               * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to an update), the system may or may not try to eventually evict the pod from its node.
               */
              "requiredDuringSchedulingIgnoredDuringExecution"?: {
                /**
                 * Required. A list of node selector terms. The terms are ORed.
                 */
                "nodeSelectorTerms": Array<{
                  /**
                   * A list of node selector requirements by node's labels.
                   */
                  "matchExpressions"?: Array<{
                    /**
                     * The label key that the selector applies to.
                     */
                    "key": string;
                    /**
                     * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                     */
                    "operator": string;
                    /**
                     * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                     */
                    "values"?: Array<string>;
                  }>;
                  /**
                   * A list of node selector requirements by node's fields.
                   */
                  "matchFields"?: Array<{
                    /**
                     * The label key that the selector applies to.
                     */
                    "key": string;
                    /**
                     * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                     */
                    "operator": string;
                    /**
                     * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                     */
                    "values"?: Array<string>;
                  }>;
                }>;
              };
            };
            /**
             * Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).
             */
            "podAffinity"?: {
              /**
               * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
               */
              "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
                /**
                 * Required. A pod affinity term, associated with the corresponding weight.
                 */
                "podAffinityTerm": {
                  /**
                   * A label query over a set of resources, in this case pods.
                   */
                  "labelSelector"?: {
                    /**
                     * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                     */
                    "matchExpressions"?: Array<{
                      /**
                       * key is the label key that the selector applies to.
                       */
                      "key": string;
                      /**
                       * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                       */
                      "operator": string;
                      /**
                       * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                       */
                      "values"?: Array<string>;
                    }>;
                    /**
                     * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                     */
                    "matchLabels"?: {
                      [key: string]: string;
                    };
                  };
                  /**
                   * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means "this pod's namespace"
                   */
                  "namespaces"?: Array<string>;
                  /**
                   * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
                   */
                  "topologyKey": string;
                };
                /**
                 * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
                 */
                "weight": number;
              }>;
              /**
               * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
               */
              "requiredDuringSchedulingIgnoredDuringExecution"?: Array<{
                /**
                 * A label query over a set of resources, in this case pods.
                 */
                "labelSelector"?: {
                  /**
                   * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                   */
                  "matchExpressions"?: Array<{
                    /**
                     * key is the label key that the selector applies to.
                     */
                    "key": string;
                    /**
                     * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                     */
                    "operator": string;
                    /**
                     * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                     */
                    "values"?: Array<string>;
                  }>;
                  /**
                   * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                   */
                  "matchLabels"?: {
                    [key: string]: string;
                  };
                };
                /**
                 * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means "this pod's namespace"
                 */
                "namespaces"?: Array<string>;
                /**
                 * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
                 */
                "topologyKey": string;
              }>;
            };
            /**
             * Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).
             */
            "podAntiAffinity"?: {
              /**
               * The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
               */
              "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
                /**
                 * Required. A pod affinity term, associated with the corresponding weight.
                 */
                "podAffinityTerm": {
                  /**
                   * A label query over a set of resources, in this case pods.
                   */
                  "labelSelector"?: {
                    /**
                     * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                     */
                    "matchExpressions"?: Array<{
                      /**
                       * key is the label key that the selector applies to.
                       */
                      "key": string;
                      /**
                       * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                       */
                      "operator": string;
                      /**
                       * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                       */
                      "values"?: Array<string>;
                    }>;
                    /**
                     * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                     */
                    "matchLabels"?: {
                      [key: string]: string;
                    };
                  };
                  /**
                   * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means "this pod's namespace"
                   */
                  "namespaces"?: Array<string>;
                  /**
                   * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
                   */
                  "topologyKey": string;
                };
                /**
                 * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
                 */
                "weight": number;
              }>;
              /**
               * If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
               */
              "requiredDuringSchedulingIgnoredDuringExecution"?: Array<{
                /**
                 * A label query over a set of resources, in this case pods.
                 */
                "labelSelector"?: {
                  /**
                   * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                   */
                  "matchExpressions"?: Array<{
                    /**
                     * key is the label key that the selector applies to.
                     */
                    "key": string;
                    /**
                     * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                     */
                    "operator": string;
                    /**
                     * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                     */
                    "values"?: Array<string>;
                  }>;
                  /**
                   * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                   */
                  "matchLabels"?: {
                    [key: string]: string;
                  };
                };
                /**
                 * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means "this pod's namespace"
                 */
                "namespaces"?: Array<string>;
                /**
                 * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
                 */
                "topologyKey": string;
              }>;
            };
          };
          /**
           * The name of an existing PostgresCluster to use as the data source for the new PostgresCluster. Defaults to the name of the PostgresCluster being created if not provided.
           */
          "clusterName"?: string;
          /**
           * The namespace of the cluster specified as the data source using the clusterName field. Defaults to the namespace of the PostgresCluster being created if not provided.
           */
          "clusterNamespace"?: string;
          /**
           * Whether or not in-place pgBackRest restores are enabled for this PostgresCluster.
           */
          "enabled": boolean;
          /**
           * Command line options to include when running the pgBackRest restore command. https://pgbackrest.org/command.html#command-restore
           */
          "options"?: Array<string>;
          /**
           * Priority class name for the pgBackRest restore Job pod. Changing this value causes PostgreSQL to restart. More info: https://kubernetes.io/docs/concepts/scheduling-eviction/pod-priority-preemption/
           */
          "priorityClassName"?: string;
          /**
           * The name of the pgBackRest repo within the source PostgresCluster that contains the backups that should be utilized to perform a pgBackRest restore when initializing the data source for the new PostgresCluster.
           */
          "repoName": string;
          /**
           * Resource requirements for the pgBackRest restore Job.
           */
          "resources"?: {
            /**
             * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
             */
            "limits"?: {
              [key: string]: any;
            };
            /**
             * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
             */
            "requests"?: {
              [key: string]: any;
            };
          };
          /**
           * Tolerations of the pgBackRest restore Job. More info: https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration
           */
          "tolerations"?: Array<{
            /**
             * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
             */
            "effect"?: string;
            /**
             * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
             */
            "key"?: string;
            /**
             * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
             */
            "operator"?: string;
            /**
             * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
             */
            "tolerationSeconds"?: number;
            /**
             * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
             */
            "value"?: string;
          }>;
        };
        /**
         * Configuration for pgBackRest sidecar containers
         */
        "sidecars"?: {
          /**
           * Defines the configuration for the pgBackRest sidecar container
           */
          "pgbackrest"?: {
            /**
             * Resource requirements for a sidecar container
             */
            "resources"?: {
              /**
               * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
               */
              "limits"?: {
                [key: string]: any;
              };
              /**
               * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
               */
              "requests"?: {
                [key: string]: any;
              };
            };
          };
        };
      };
    };
    /**
     * The secret containing the replication client certificates and keys for secure connections to the PostgreSQL server. It will need to contain the client TLS certificate, TLS key and the Certificate Authority certificate with the data keys set to tls.crt, tls.key and ca.crt, respectively. NOTE: If CustomReplicationClientTLSSecret is provided, CustomTLSSecret MUST be provided and the ca.crt provided must be the same.
     */
    "customReplicationTLSSecret"?: {
      /**
       * If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
       */
      "items"?: Array<{
        /**
         * The key to project.
         */
        "key": string;
        /**
         * Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
         */
        "mode"?: number;
        /**
         * The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
         */
        "path": string;
      }>;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
       */
      "name"?: string;
      /**
       * Specify whether the Secret or its key must be defined
       */
      "optional"?: boolean;
    };
    /**
     * The secret containing the Certificates and Keys to encrypt PostgreSQL traffic will need to contain the server TLS certificate, TLS key and the Certificate Authority certificate with the data keys set to tls.crt, tls.key and ca.crt, respectively. It will then be mounted as a volume projection to the '/pgconf/tls' directory. For more information on Kubernetes secret projections, please see https://k8s.io/docs/concepts/configuration/secret/#projection-of-secret-keys-to-specific-paths NOTE: If CustomTLSSecret is provided, CustomReplicationClientTLSSecret MUST be provided and the ca.crt provided must be the same.
     */
    "customTLSSecret"?: {
      /**
       * If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
       */
      "items"?: Array<{
        /**
         * The key to project.
         */
        "key": string;
        /**
         * Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
         */
        "mode"?: number;
        /**
         * The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
         */
        "path": string;
      }>;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
       */
      "name"?: string;
      /**
       * Specify whether the Secret or its key must be defined
       */
      "optional"?: boolean;
    };
    /**
     * Specifies a data source for bootstrapping the PostgreSQL cluster.
     */
    "dataSource"?: {
      /**
       * Defines a pgBackRest data source that can be used to pre-populate the PostgreSQL data directory for a new PostgreSQL cluster using a pgBackRest restore.
       */
      "postgresCluster"?: {
        /**
         * Scheduling constraints of the pgBackRest restore Job. More info: https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node
         */
        "affinity"?: {
          /**
           * Describes node affinity scheduling rules for the pod.
           */
          "nodeAffinity"?: {
            /**
             * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred.
             */
            "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
              /**
               * A node selector term, associated with the corresponding weight.
               */
              "preference": {
                /**
                 * A list of node selector requirements by node's labels.
                 */
                "matchExpressions"?: Array<{
                  /**
                   * The label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                   */
                  "operator": string;
                  /**
                   * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
                /**
                 * A list of node selector requirements by node's fields.
                 */
                "matchFields"?: Array<{
                  /**
                   * The label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                   */
                  "operator": string;
                  /**
                   * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
              };
              /**
               * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
               */
              "weight": number;
            }>;
            /**
             * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to an update), the system may or may not try to eventually evict the pod from its node.
             */
            "requiredDuringSchedulingIgnoredDuringExecution"?: {
              /**
               * Required. A list of node selector terms. The terms are ORed.
               */
              "nodeSelectorTerms": Array<{
                /**
                 * A list of node selector requirements by node's labels.
                 */
                "matchExpressions"?: Array<{
                  /**
                   * The label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                   */
                  "operator": string;
                  /**
                   * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
                /**
                 * A list of node selector requirements by node's fields.
                 */
                "matchFields"?: Array<{
                  /**
                   * The label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                   */
                  "operator": string;
                  /**
                   * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
              }>;
            };
          };
          /**
           * Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).
           */
          "podAffinity"?: {
            /**
             * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
             */
            "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
              /**
               * Required. A pod affinity term, associated with the corresponding weight.
               */
              "podAffinityTerm": {
                /**
                 * A label query over a set of resources, in this case pods.
                 */
                "labelSelector"?: {
                  /**
                   * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                   */
                  "matchExpressions"?: Array<{
                    /**
                     * key is the label key that the selector applies to.
                     */
                    "key": string;
                    /**
                     * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                     */
                    "operator": string;
                    /**
                     * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                     */
                    "values"?: Array<string>;
                  }>;
                  /**
                   * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                   */
                  "matchLabels"?: {
                    [key: string]: string;
                  };
                };
                /**
                 * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means "this pod's namespace"
                 */
                "namespaces"?: Array<string>;
                /**
                 * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
                 */
                "topologyKey": string;
              };
              /**
               * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
               */
              "weight": number;
            }>;
            /**
             * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
             */
            "requiredDuringSchedulingIgnoredDuringExecution"?: Array<{
              /**
               * A label query over a set of resources, in this case pods.
               */
              "labelSelector"?: {
                /**
                 * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                 */
                "matchExpressions"?: Array<{
                  /**
                   * key is the label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                   */
                  "operator": string;
                  /**
                   * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
                /**
                 * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                 */
                "matchLabels"?: {
                  [key: string]: string;
                };
              };
              /**
               * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means "this pod's namespace"
               */
              "namespaces"?: Array<string>;
              /**
               * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
               */
              "topologyKey": string;
            }>;
          };
          /**
           * Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).
           */
          "podAntiAffinity"?: {
            /**
             * The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
             */
            "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
              /**
               * Required. A pod affinity term, associated with the corresponding weight.
               */
              "podAffinityTerm": {
                /**
                 * A label query over a set of resources, in this case pods.
                 */
                "labelSelector"?: {
                  /**
                   * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                   */
                  "matchExpressions"?: Array<{
                    /**
                     * key is the label key that the selector applies to.
                     */
                    "key": string;
                    /**
                     * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                     */
                    "operator": string;
                    /**
                     * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                     */
                    "values"?: Array<string>;
                  }>;
                  /**
                   * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                   */
                  "matchLabels"?: {
                    [key: string]: string;
                  };
                };
                /**
                 * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means "this pod's namespace"
                 */
                "namespaces"?: Array<string>;
                /**
                 * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
                 */
                "topologyKey": string;
              };
              /**
               * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
               */
              "weight": number;
            }>;
            /**
             * If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
             */
            "requiredDuringSchedulingIgnoredDuringExecution"?: Array<{
              /**
               * A label query over a set of resources, in this case pods.
               */
              "labelSelector"?: {
                /**
                 * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                 */
                "matchExpressions"?: Array<{
                  /**
                   * key is the label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                   */
                  "operator": string;
                  /**
                   * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
                /**
                 * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                 */
                "matchLabels"?: {
                  [key: string]: string;
                };
              };
              /**
               * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means "this pod's namespace"
               */
              "namespaces"?: Array<string>;
              /**
               * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
               */
              "topologyKey": string;
            }>;
          };
        };
        /**
         * The name of an existing PostgresCluster to use as the data source for the new PostgresCluster. Defaults to the name of the PostgresCluster being created if not provided.
         */
        "clusterName"?: string;
        /**
         * The namespace of the cluster specified as the data source using the clusterName field. Defaults to the namespace of the PostgresCluster being created if not provided.
         */
        "clusterNamespace"?: string;
        /**
         * Command line options to include when running the pgBackRest restore command. https://pgbackrest.org/command.html#command-restore
         */
        "options"?: Array<string>;
        /**
         * Priority class name for the pgBackRest restore Job pod. Changing this value causes PostgreSQL to restart. More info: https://kubernetes.io/docs/concepts/scheduling-eviction/pod-priority-preemption/
         */
        "priorityClassName"?: string;
        /**
         * The name of the pgBackRest repo within the source PostgresCluster that contains the backups that should be utilized to perform a pgBackRest restore when initializing the data source for the new PostgresCluster.
         */
        "repoName": string;
        /**
         * Resource requirements for the pgBackRest restore Job.
         */
        "resources"?: {
          /**
           * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
           */
          "limits"?: {
            [key: string]: any;
          };
          /**
           * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
           */
          "requests"?: {
            [key: string]: any;
          };
        };
        /**
         * Tolerations of the pgBackRest restore Job. More info: https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration
         */
        "tolerations"?: Array<{
          /**
           * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
           */
          "effect"?: string;
          /**
           * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
           */
          "key"?: string;
          /**
           * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
           */
          "operator"?: string;
          /**
           * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
           */
          "tolerationSeconds"?: number;
          /**
           * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
           */
          "value"?: string;
        }>;
      };
      /**
       * Defines any existing volumes to reuse for this PostgresCluster.
       */
      "volumes"?: {
        /**
         * Defines the existing pgBackRest repo volume and directory to use in the current PostgresCluster.
         */
        "pgBackRestVolume"?: {
          /**
           * The existing directory. When not set, a move Job is not created for the associated volume.
           */
          "directory"?: string;
          /**
           * The existing PVC name.
           */
          "pvcName": string;
        };
        /**
         * Defines the existing pgData volume and directory to use in the current PostgresCluster.
         */
        "pgDataVolume"?: {
          /**
           * The existing directory. When not set, a move Job is not created for the associated volume.
           */
          "directory"?: string;
          /**
           * The existing PVC name.
           */
          "pvcName": string;
        };
        /**
         * Defines the existing pg_wal volume and directory to use in the current PostgresCluster. Note that a defined pg_wal volume MUST be accompanied by a pgData volume.
         */
        "pgWALVolume"?: {
          /**
           * The existing directory. When not set, a move Job is not created for the associated volume.
           */
          "directory"?: string;
          /**
           * The existing PVC name.
           */
          "pvcName": string;
        };
      };
    };
    /**
     * DatabaseInitSQL defines a ConfigMap containing custom SQL that will be run after the cluster is initialized. This ConfigMap must be in the same namespace as the cluster.
     */
    "databaseInitSQL"?: {
      /**
       * Key is the ConfigMap data key that points to a SQL string
       */
      "key": string;
      /**
       * Name is the name of a ConfigMap
       */
      "name": string;
    };
    /**
     * Whether or not the PostgreSQL cluster should use the defined default scheduling constraints. If the field is unset or false, the default scheduling constraints will be used in addition to any custom constraints provided.
     */
    "disableDefaultPodScheduling"?: boolean;
    /**
     * The image name to use for PostgreSQL containers. When omitted, the value comes from an operator environment variable. For standard PostgreSQL images, the format is RELATED_IMAGE_POSTGRES_{postgresVersion}, e.g. RELATED_IMAGE_POSTGRES_13. For PostGIS enabled PostgreSQL images, the format is RELATED_IMAGE_POSTGRES_{postgresVersion}_GIS_{postGISVersion}, e.g. RELATED_IMAGE_POSTGRES_13_GIS_3.1.
     */
    "image"?: string;
    /**
     * ImagePullPolicy is used to determine when Kubernetes will attempt to pull (download) container images. More info: https://kubernetes.io/docs/concepts/containers/images/#image-pull-policy
     */
    "imagePullPolicy"?: "Always" | "Never" | "IfNotPresent";
    /**
     * The image pull secrets used to pull from a private registry Changing this value causes all running pods to restart. https://k8s.io/docs/tasks/configure-pod-container/pull-image-private-registry/
     */
    "imagePullSecrets"?: Array<{
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
       */
      "name"?: string;
    }>;
    "instances": Array<{
      /**
       * Scheduling constraints of a PostgreSQL pod. Changing this value causes PostgreSQL to restart. More info: https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node
       */
      "affinity"?: {
        /**
         * Describes node affinity scheduling rules for the pod.
         */
        "nodeAffinity"?: {
          /**
           * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred.
           */
          "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
            /**
             * A node selector term, associated with the corresponding weight.
             */
            "preference": {
              /**
               * A list of node selector requirements by node's labels.
               */
              "matchExpressions"?: Array<{
                /**
                 * The label key that the selector applies to.
                 */
                "key": string;
                /**
                 * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                 */
                "operator": string;
                /**
                 * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                 */
                "values"?: Array<string>;
              }>;
              /**
               * A list of node selector requirements by node's fields.
               */
              "matchFields"?: Array<{
                /**
                 * The label key that the selector applies to.
                 */
                "key": string;
                /**
                 * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                 */
                "operator": string;
                /**
                 * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                 */
                "values"?: Array<string>;
              }>;
            };
            /**
             * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
             */
            "weight": number;
          }>;
          /**
           * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to an update), the system may or may not try to eventually evict the pod from its node.
           */
          "requiredDuringSchedulingIgnoredDuringExecution"?: {
            /**
             * Required. A list of node selector terms. The terms are ORed.
             */
            "nodeSelectorTerms": Array<{
              /**
               * A list of node selector requirements by node's labels.
               */
              "matchExpressions"?: Array<{
                /**
                 * The label key that the selector applies to.
                 */
                "key": string;
                /**
                 * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                 */
                "operator": string;
                /**
                 * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                 */
                "values"?: Array<string>;
              }>;
              /**
               * A list of node selector requirements by node's fields.
               */
              "matchFields"?: Array<{
                /**
                 * The label key that the selector applies to.
                 */
                "key": string;
                /**
                 * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                 */
                "operator": string;
                /**
                 * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                 */
                "values"?: Array<string>;
              }>;
            }>;
          };
        };
        /**
         * Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).
         */
        "podAffinity"?: {
          /**
           * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
           */
          "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
            /**
             * Required. A pod affinity term, associated with the corresponding weight.
             */
            "podAffinityTerm": {
              /**
               * A label query over a set of resources, in this case pods.
               */
              "labelSelector"?: {
                /**
                 * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                 */
                "matchExpressions"?: Array<{
                  /**
                   * key is the label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                   */
                  "operator": string;
                  /**
                   * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
                /**
                 * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                 */
                "matchLabels"?: {
                  [key: string]: string;
                };
              };
              /**
               * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means "this pod's namespace"
               */
              "namespaces"?: Array<string>;
              /**
               * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
               */
              "topologyKey": string;
            };
            /**
             * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
             */
            "weight": number;
          }>;
          /**
           * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
           */
          "requiredDuringSchedulingIgnoredDuringExecution"?: Array<{
            /**
             * A label query over a set of resources, in this case pods.
             */
            "labelSelector"?: {
              /**
               * matchExpressions is a list of label selector requirements. The requirements are ANDed.
               */
              "matchExpressions"?: Array<{
                /**
                 * key is the label key that the selector applies to.
                 */
                "key": string;
                /**
                 * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                 */
                "operator": string;
                /**
                 * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                 */
                "values"?: Array<string>;
              }>;
              /**
               * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
               */
              "matchLabels"?: {
                [key: string]: string;
              };
            };
            /**
             * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means "this pod's namespace"
             */
            "namespaces"?: Array<string>;
            /**
             * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
             */
            "topologyKey": string;
          }>;
        };
        /**
         * Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).
         */
        "podAntiAffinity"?: {
          /**
           * The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
           */
          "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
            /**
             * Required. A pod affinity term, associated with the corresponding weight.
             */
            "podAffinityTerm": {
              /**
               * A label query over a set of resources, in this case pods.
               */
              "labelSelector"?: {
                /**
                 * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                 */
                "matchExpressions"?: Array<{
                  /**
                   * key is the label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                   */
                  "operator": string;
                  /**
                   * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
                /**
                 * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                 */
                "matchLabels"?: {
                  [key: string]: string;
                };
              };
              /**
               * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means "this pod's namespace"
               */
              "namespaces"?: Array<string>;
              /**
               * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
               */
              "topologyKey": string;
            };
            /**
             * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
             */
            "weight": number;
          }>;
          /**
           * If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
           */
          "requiredDuringSchedulingIgnoredDuringExecution"?: Array<{
            /**
             * A label query over a set of resources, in this case pods.
             */
            "labelSelector"?: {
              /**
               * matchExpressions is a list of label selector requirements. The requirements are ANDed.
               */
              "matchExpressions"?: Array<{
                /**
                 * key is the label key that the selector applies to.
                 */
                "key": string;
                /**
                 * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                 */
                "operator": string;
                /**
                 * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                 */
                "values"?: Array<string>;
              }>;
              /**
               * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
               */
              "matchLabels"?: {
                [key: string]: string;
              };
            };
            /**
             * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means "this pod's namespace"
             */
            "namespaces"?: Array<string>;
            /**
             * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
             */
            "topologyKey": string;
          }>;
        };
      };
      /**
       * Defines a PersistentVolumeClaim for PostgreSQL data. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes
       */
      "dataVolumeClaimSpec": {
        /**
         * AccessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
         */
        "accessModes": Array<string>;
        /**
         * This field can be used to specify either: \* An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot) \* An existing PVC (PersistentVolumeClaim) \* An existing custom resource that implements data population (Alpha) In order to use custom resource types that implement data population, the AnyVolumeDataSource feature gate must be enabled. If the provisioner or an external controller can support the specified data source, it will create a new volume based on the contents of the specified data source.
         */
        "dataSource"?: {
          /**
           * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
           */
          "apiGroup"?: string;
          /**
           * Kind is the type of resource being referenced
           */
          "kind": string;
          /**
           * Name is the name of resource being referenced
           */
          "name": string;
        };
        /**
         * Resources represents the minimum resources the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
         */
        "resources": {
          /**
           * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
           */
          "limits"?: {
            [key: string]: any;
          };
          /**
           * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
           */
          "requests": {
            [key: string]: any;
          };
        };
        /**
         * A label query over volumes to consider for binding.
         */
        "selector"?: {
          /**
           * matchExpressions is a list of label selector requirements. The requirements are ANDed.
           */
          "matchExpressions"?: Array<{
            /**
             * key is the label key that the selector applies to.
             */
            "key": string;
            /**
             * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            "operator": string;
            /**
             * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
             */
            "values"?: Array<string>;
          }>;
          /**
           * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
           */
          "matchLabels"?: {
            [key: string]: string;
          };
        };
        /**
         * Name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
         */
        "storageClassName"?: string;
        /**
         * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
         */
        "volumeMode"?: string;
        /**
         * VolumeName is the binding reference to the PersistentVolume backing this claim.
         */
        "volumeName"?: string;
      };
      /**
       * Metadata contains metadata for PostgresCluster resources
       */
      "metadata"?: {
        "annotations"?: {
          [key: string]: string;
        };
        "labels"?: {
          [key: string]: string;
        };
      };
      "name"?: string;
      /**
       * Priority class name for the PostgreSQL pod. Changing this value causes PostgreSQL to restart. More info: https://kubernetes.io/docs/concepts/scheduling-eviction/pod-priority-preemption/
       */
      "priorityClassName"?: string;
      "replicas"?: number;
      /**
       * Compute resources of a PostgreSQL container.
       */
      "resources"?: {
        /**
         * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
         */
        "limits"?: {
          [key: string]: any;
        };
        /**
         * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
         */
        "requests"?: {
          [key: string]: any;
        };
      };
      /**
       * Configuration for instance sidecar containers
       */
      "sidecars"?: {
        /**
         * Defines the configuration for the replica cert copy sidecar container
         */
        "replicaCertCopy"?: {
          /**
           * Resource requirements for a sidecar container
           */
          "resources"?: {
            /**
             * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
             */
            "limits"?: {
              [key: string]: any;
            };
            /**
             * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
             */
            "requests"?: {
              [key: string]: any;
            };
          };
        };
      };
      /**
       * Tolerations of a PostgreSQL pod. Changing this value causes PostgreSQL to restart. More info: https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration
       */
      "tolerations"?: Array<{
        /**
         * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
         */
        "effect"?: string;
        /**
         * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
         */
        "key"?: string;
        /**
         * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
         */
        "operator"?: string;
        /**
         * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
         */
        "tolerationSeconds"?: number;
        /**
         * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
         */
        "value"?: string;
      }>;
      /**
       * Topology spread constraints of a PostgreSQL pod. Changing this value causes PostgreSQL to restart. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-topology-spread-constraints/
       */
      "topologySpreadConstraints"?: Array<{
        /**
         * LabelSelector is used to find matching pods. Pods that match this label selector are counted to determine the number of pods in their corresponding topology domain.
         */
        "labelSelector"?: {
          /**
           * matchExpressions is a list of label selector requirements. The requirements are ANDed.
           */
          "matchExpressions"?: Array<{
            /**
             * key is the label key that the selector applies to.
             */
            "key": string;
            /**
             * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            "operator": string;
            /**
             * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
             */
            "values"?: Array<string>;
          }>;
          /**
           * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
           */
          "matchLabels"?: {
            [key: string]: string;
          };
        };
        /**
         * MaxSkew describes the degree to which pods may be unevenly distributed. When `whenUnsatisfiable=DoNotSchedule`, it is the maximum permitted difference between the number of matching pods in the target topology and the global minimum. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 1/1/0: | zone1 | zone2 | zone3 | |   P   |   P   |       | - if MaxSkew is 1, incoming pod can only be scheduled to zone3 to become 1/1/1; scheduling it onto zone1(zone2) would make the ActualSkew(2-0) on zone1(zone2) violate MaxSkew(1). - if MaxSkew is 2, incoming pod can be scheduled onto any zone. When `whenUnsatisfiable=ScheduleAnyway`, it is used to give higher precedence to topologies that satisfy it. It's a required field. Default value is 1 and 0 is not allowed.
         */
        "maxSkew": number;
        /**
         * TopologyKey is the key of node labels. Nodes that have a label with this key and identical values are considered to be in the same topology. We consider each <key, value> as a "bucket", and try to put balanced number of pods into each bucket. It's a required field.
         */
        "topologyKey": string;
        /**
         * WhenUnsatisfiable indicates how to deal with a pod if it doesn't satisfy the spread constraint. - DoNotSchedule (default) tells the scheduler not to schedule it. - ScheduleAnyway tells the scheduler to schedule the pod in any location,   but giving higher precedence to topologies that would help reduce the   skew. A constraint is considered "Unsatisfiable" for an incoming pod if and only if every possible node assigment for that pod would violate "MaxSkew" on some topology. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 3/1/1: | zone1 | zone2 | zone3 | | P P P |   P   |   P   | If WhenUnsatisfiable is set to DoNotSchedule, incoming pod can only be scheduled to zone2(zone3) to become 3/2/1(3/1/2) as ActualSkew(2-1) on zone2(zone3) satisfies MaxSkew(1). In other words, the cluster can still be imbalanced, but scheduler won't make it \*more\* imbalanced. It's a required field.
         */
        "whenUnsatisfiable": string;
      }>;
      /**
       * Defines a separate PersistentVolumeClaim for PostgreSQL's write-ahead log. More info: https://www.postgresql.org/docs/current/wal.html
       */
      "walVolumeClaimSpec"?: {
        /**
         * AccessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
         */
        "accessModes": Array<string>;
        /**
         * This field can be used to specify either: \* An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot) \* An existing PVC (PersistentVolumeClaim) \* An existing custom resource that implements data population (Alpha) In order to use custom resource types that implement data population, the AnyVolumeDataSource feature gate must be enabled. If the provisioner or an external controller can support the specified data source, it will create a new volume based on the contents of the specified data source.
         */
        "dataSource"?: {
          /**
           * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
           */
          "apiGroup"?: string;
          /**
           * Kind is the type of resource being referenced
           */
          "kind": string;
          /**
           * Name is the name of resource being referenced
           */
          "name": string;
        };
        /**
         * Resources represents the minimum resources the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
         */
        "resources": {
          /**
           * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
           */
          "limits"?: {
            [key: string]: any;
          };
          /**
           * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
           */
          "requests": {
            [key: string]: any;
          };
        };
        /**
         * A label query over volumes to consider for binding.
         */
        "selector"?: {
          /**
           * matchExpressions is a list of label selector requirements. The requirements are ANDed.
           */
          "matchExpressions"?: Array<{
            /**
             * key is the label key that the selector applies to.
             */
            "key": string;
            /**
             * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            "operator": string;
            /**
             * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
             */
            "values"?: Array<string>;
          }>;
          /**
           * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
           */
          "matchLabels"?: {
            [key: string]: string;
          };
        };
        /**
         * Name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
         */
        "storageClassName"?: string;
        /**
         * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
         */
        "volumeMode"?: string;
        /**
         * VolumeName is the binding reference to the PersistentVolume backing this claim.
         */
        "volumeName"?: string;
      };
    }>;
    /**
     * Metadata contains metadata for PostgresCluster resources
     */
    "metadata"?: {
      "annotations"?: {
        [key: string]: string;
      };
      "labels"?: {
        [key: string]: string;
      };
    };
    /**
     * The specification of monitoring tools that connect to PostgreSQL
     */
    "monitoring"?: {
      /**
       * PGMonitorSpec defines the desired state of the pgMonitor tool suite
       */
      "pgmonitor"?: {
        "exporter"?: {
          /**
           * Projected volumes containing custom PostgreSQL Exporter configuration.  Currently supports the customization of PostgreSQL Exporter queries. If a "queries.yaml" file is detected in any volume projected using this field, it will be loaded using the "extend.query-path" flag: https://github.com/prometheus-community/postgres_exporter#flags Changing the values of field causes PostgreSQL and the exporter to restart.
           */
          "configuration"?: Array<{
            /**
             * information about the configMap data to project
             */
            "configMap"?: {
              /**
               * If unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
               */
              "items"?: Array<{
                /**
                 * The key to project.
                 */
                "key": string;
                /**
                 * Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
                 */
                "mode"?: number;
                /**
                 * The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
                 */
                "path": string;
              }>;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the ConfigMap or its keys must be defined
               */
              "optional"?: boolean;
            };
            /**
             * information about the downwardAPI data to project
             */
            "downwardAPI"?: {
              /**
               * Items is a list of DownwardAPIVolume file
               */
              "items"?: Array<{
                /**
                 * Required: Selects a field of the pod: only annotations, labels, name and namespace are supported.
                 */
                "fieldRef"?: {
                  /**
                   * Version of the schema the FieldPath is written in terms of, defaults to "v1".
                   */
                  "apiVersion"?: string;
                  /**
                   * Path of the field to select in the specified API version.
                   */
                  "fieldPath": string;
                };
                /**
                 * Optional: mode bits used to set permissions on this file, must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
                 */
                "mode"?: number;
                /**
                 * Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
                 */
                "path": string;
                /**
                 * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.
                 */
                "resourceFieldRef"?: {
                  /**
                   * Container name: required for volumes, optional for env vars
                   */
                  "containerName"?: string;
                  /**
                   * Specifies the output format of the exposed resources, defaults to "1"
                   */
                  "divisor"?: any;
                  /**
                   * Required: resource to select
                   */
                  "resource": string;
                };
              }>;
            };
            /**
             * information about the secret data to project
             */
            "secret"?: {
              /**
               * If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
               */
              "items"?: Array<{
                /**
                 * The key to project.
                 */
                "key": string;
                /**
                 * Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
                 */
                "mode"?: number;
                /**
                 * The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
                 */
                "path": string;
              }>;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the Secret or its key must be defined
               */
              "optional"?: boolean;
            };
            /**
             * information about the serviceAccountToken data to project
             */
            "serviceAccountToken"?: {
              /**
               * Audience is the intended audience of the token. A recipient of a token must identify itself with an identifier specified in the audience of the token, and otherwise should reject the token. The audience defaults to the identifier of the apiserver.
               */
              "audience"?: string;
              /**
               * ExpirationSeconds is the requested duration of validity of the service account token. As the token approaches expiration, the kubelet volume plugin will proactively rotate the service account token. The kubelet will start trying to rotate the token if the token is older than 80 percent of its time to live or if the token is older than 24 hours.Defaults to 1 hour and must be at least 10 minutes.
               */
              "expirationSeconds"?: number;
              /**
               * Path is the path relative to the mount point of the file to project the token into.
               */
              "path": string;
            };
          }>;
          /**
           * The image name to use for crunchy-postgres-exporter containers. The image may also be set using the RELATED_IMAGE_PGEXPORTER environment variable.
           */
          "image"?: string;
          /**
           * Changing this value causes PostgreSQL and the exporter to restart. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers
           */
          "resources"?: {
            /**
             * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
             */
            "limits"?: {
              [key: string]: any;
            };
            /**
             * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
             */
            "requests"?: {
              [key: string]: any;
            };
          };
        };
      };
    };
    /**
     * Whether or not the PostgreSQL cluster is being deployed to an OpenShift environment. If the field is unset, the operator will automatically detect the environment.
     */
    "openshift"?: boolean;
    "patroni"?: {
      "dynamicConfiguration"?: {
      };
      /**
       * TTL of the cluster leader lock. "Think of it as the length of time before initiation of the automatic failover process."
       */
      "leaderLeaseDurationSeconds"?: number;
      /**
       * The port on which Patroni should listen.
       */
      "port"?: number;
      /**
       * The interval for refreshing the leader lock and applying dynamicConfiguration. Must be less than leaderLeaseDurationSeconds.
       */
      "syncPeriodSeconds"?: number;
    };
    /**
     * The port on which PostgreSQL should listen.
     */
    "port"?: number;
    /**
     * The PostGIS extension version installed in the PostgreSQL image. When image is not set, indicates a PostGIS enabled image will be used.
     */
    "postGISVersion"?: string;
    /**
     * The major version of PostgreSQL installed in the PostgreSQL image
     */
    "postgresVersion": number;
    /**
     * The specification of a proxy that connects to PostgreSQL.
     */
    "proxy"?: {
      /**
       * Defines a PgBouncer proxy and connection pooler.
       */
      "pgBouncer": {
        /**
         * Scheduling constraints of a PgBouncer pod. Changing this value causes PgBouncer to restart. More info: https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node
         */
        "affinity"?: {
          /**
           * Describes node affinity scheduling rules for the pod.
           */
          "nodeAffinity"?: {
            /**
             * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred.
             */
            "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
              /**
               * A node selector term, associated with the corresponding weight.
               */
              "preference": {
                /**
                 * A list of node selector requirements by node's labels.
                 */
                "matchExpressions"?: Array<{
                  /**
                   * The label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                   */
                  "operator": string;
                  /**
                   * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
                /**
                 * A list of node selector requirements by node's fields.
                 */
                "matchFields"?: Array<{
                  /**
                   * The label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                   */
                  "operator": string;
                  /**
                   * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
              };
              /**
               * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
               */
              "weight": number;
            }>;
            /**
             * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to an update), the system may or may not try to eventually evict the pod from its node.
             */
            "requiredDuringSchedulingIgnoredDuringExecution"?: {
              /**
               * Required. A list of node selector terms. The terms are ORed.
               */
              "nodeSelectorTerms": Array<{
                /**
                 * A list of node selector requirements by node's labels.
                 */
                "matchExpressions"?: Array<{
                  /**
                   * The label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                   */
                  "operator": string;
                  /**
                   * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
                /**
                 * A list of node selector requirements by node's fields.
                 */
                "matchFields"?: Array<{
                  /**
                   * The label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                   */
                  "operator": string;
                  /**
                   * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
              }>;
            };
          };
          /**
           * Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).
           */
          "podAffinity"?: {
            /**
             * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
             */
            "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
              /**
               * Required. A pod affinity term, associated with the corresponding weight.
               */
              "podAffinityTerm": {
                /**
                 * A label query over a set of resources, in this case pods.
                 */
                "labelSelector"?: {
                  /**
                   * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                   */
                  "matchExpressions"?: Array<{
                    /**
                     * key is the label key that the selector applies to.
                     */
                    "key": string;
                    /**
                     * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                     */
                    "operator": string;
                    /**
                     * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                     */
                    "values"?: Array<string>;
                  }>;
                  /**
                   * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                   */
                  "matchLabels"?: {
                    [key: string]: string;
                  };
                };
                /**
                 * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means "this pod's namespace"
                 */
                "namespaces"?: Array<string>;
                /**
                 * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
                 */
                "topologyKey": string;
              };
              /**
               * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
               */
              "weight": number;
            }>;
            /**
             * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
             */
            "requiredDuringSchedulingIgnoredDuringExecution"?: Array<{
              /**
               * A label query over a set of resources, in this case pods.
               */
              "labelSelector"?: {
                /**
                 * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                 */
                "matchExpressions"?: Array<{
                  /**
                   * key is the label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                   */
                  "operator": string;
                  /**
                   * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
                /**
                 * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                 */
                "matchLabels"?: {
                  [key: string]: string;
                };
              };
              /**
               * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means "this pod's namespace"
               */
              "namespaces"?: Array<string>;
              /**
               * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
               */
              "topologyKey": string;
            }>;
          };
          /**
           * Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).
           */
          "podAntiAffinity"?: {
            /**
             * The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
             */
            "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
              /**
               * Required. A pod affinity term, associated with the corresponding weight.
               */
              "podAffinityTerm": {
                /**
                 * A label query over a set of resources, in this case pods.
                 */
                "labelSelector"?: {
                  /**
                   * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                   */
                  "matchExpressions"?: Array<{
                    /**
                     * key is the label key that the selector applies to.
                     */
                    "key": string;
                    /**
                     * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                     */
                    "operator": string;
                    /**
                     * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                     */
                    "values"?: Array<string>;
                  }>;
                  /**
                   * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                   */
                  "matchLabels"?: {
                    [key: string]: string;
                  };
                };
                /**
                 * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means "this pod's namespace"
                 */
                "namespaces"?: Array<string>;
                /**
                 * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
                 */
                "topologyKey": string;
              };
              /**
               * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
               */
              "weight": number;
            }>;
            /**
             * If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
             */
            "requiredDuringSchedulingIgnoredDuringExecution"?: Array<{
              /**
               * A label query over a set of resources, in this case pods.
               */
              "labelSelector"?: {
                /**
                 * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                 */
                "matchExpressions"?: Array<{
                  /**
                   * key is the label key that the selector applies to.
                   */
                  "key": string;
                  /**
                   * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                   */
                  "operator": string;
                  /**
                   * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                   */
                  "values"?: Array<string>;
                }>;
                /**
                 * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
                 */
                "matchLabels"?: {
                  [key: string]: string;
                };
              };
              /**
               * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means "this pod's namespace"
               */
              "namespaces"?: Array<string>;
              /**
               * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
               */
              "topologyKey": string;
            }>;
          };
        };
        /**
         * Configuration settings for the PgBouncer process. Changes to any of these values will be automatically reloaded without validation. Be careful, as you may put PgBouncer into an unusable state. More info: https://www.pgbouncer.org/usage.html#reload
         */
        "config"?: {
          /**
           * PgBouncer database definitions. The key is the database requested by a client while the value is a libpq-styled connection string. The special key "\*" acts as a fallback. When this field is empty, PgBouncer is configured with a single "\*" entry that connects to the primary PostgreSQL instance. More info: https://www.pgbouncer.org/config.html#section-databases
           */
          "databases"?: {
            [key: string]: string;
          };
          /**
           * Files to mount under "/etc/pgbouncer". When specified, settings in the "pgbouncer.ini" file are loaded before all others. From there, other files may be included by absolute path. Changing these references causes PgBouncer to restart, but changes to the file contents are automatically reloaded. More info: https://www.pgbouncer.org/config.html#include-directive
           */
          "files"?: Array<{
            /**
             * information about the configMap data to project
             */
            "configMap"?: {
              /**
               * If unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
               */
              "items"?: Array<{
                /**
                 * The key to project.
                 */
                "key": string;
                /**
                 * Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
                 */
                "mode"?: number;
                /**
                 * The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
                 */
                "path": string;
              }>;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the ConfigMap or its keys must be defined
               */
              "optional"?: boolean;
            };
            /**
             * information about the downwardAPI data to project
             */
            "downwardAPI"?: {
              /**
               * Items is a list of DownwardAPIVolume file
               */
              "items"?: Array<{
                /**
                 * Required: Selects a field of the pod: only annotations, labels, name and namespace are supported.
                 */
                "fieldRef"?: {
                  /**
                   * Version of the schema the FieldPath is written in terms of, defaults to "v1".
                   */
                  "apiVersion"?: string;
                  /**
                   * Path of the field to select in the specified API version.
                   */
                  "fieldPath": string;
                };
                /**
                 * Optional: mode bits used to set permissions on this file, must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
                 */
                "mode"?: number;
                /**
                 * Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
                 */
                "path": string;
                /**
                 * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.
                 */
                "resourceFieldRef"?: {
                  /**
                   * Container name: required for volumes, optional for env vars
                   */
                  "containerName"?: string;
                  /**
                   * Specifies the output format of the exposed resources, defaults to "1"
                   */
                  "divisor"?: any;
                  /**
                   * Required: resource to select
                   */
                  "resource": string;
                };
              }>;
            };
            /**
             * information about the secret data to project
             */
            "secret"?: {
              /**
               * If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
               */
              "items"?: Array<{
                /**
                 * The key to project.
                 */
                "key": string;
                /**
                 * Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
                 */
                "mode"?: number;
                /**
                 * The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
                 */
                "path": string;
              }>;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the Secret or its key must be defined
               */
              "optional"?: boolean;
            };
            /**
             * information about the serviceAccountToken data to project
             */
            "serviceAccountToken"?: {
              /**
               * Audience is the intended audience of the token. A recipient of a token must identify itself with an identifier specified in the audience of the token, and otherwise should reject the token. The audience defaults to the identifier of the apiserver.
               */
              "audience"?: string;
              /**
               * ExpirationSeconds is the requested duration of validity of the service account token. As the token approaches expiration, the kubelet volume plugin will proactively rotate the service account token. The kubelet will start trying to rotate the token if the token is older than 80 percent of its time to live or if the token is older than 24 hours.Defaults to 1 hour and must be at least 10 minutes.
               */
              "expirationSeconds"?: number;
              /**
               * Path is the path relative to the mount point of the file to project the token into.
               */
              "path": string;
            };
          }>;
          /**
           * Settings that apply to the entire PgBouncer process. More info: https://www.pgbouncer.org/config.html
           */
          "global"?: {
            [key: string]: string;
          };
          /**
           * Connection settings specific to particular users. More info: https://www.pgbouncer.org/config.html#section-users
           */
          "users"?: {
            [key: string]: string;
          };
        };
        /**
         * A secret projection containing a certificate and key with which to encrypt connections to PgBouncer. The "tls.crt", "tls.key", and "ca.crt" paths must be PEM-encoded certificates and keys. Changing this value causes PgBouncer to restart. More info: https://kubernetes.io/docs/concepts/configuration/secret/#projection-of-secret-keys-to-specific-paths
         */
        "customTLSSecret"?: {
          /**
           * If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
           */
          "items"?: Array<{
            /**
             * The key to project.
             */
            "key": string;
            /**
             * Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
             */
            "mode"?: number;
            /**
             * The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
             */
            "path": string;
          }>;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
           */
          "name"?: string;
          /**
           * Specify whether the Secret or its key must be defined
           */
          "optional"?: boolean;
        };
        /**
         * Name of a container image that can run PgBouncer 1.15 or newer. Changing this value causes PgBouncer to restart. The image may also be set using the RELATED_IMAGE_PGBOUNCER environment variable. More info: https://kubernetes.io/docs/concepts/containers/images
         */
        "image"?: string;
        /**
         * Metadata contains metadata for PostgresCluster resources
         */
        "metadata"?: {
          "annotations"?: {
            [key: string]: string;
          };
          "labels"?: {
            [key: string]: string;
          };
        };
        /**
         * Port on which PgBouncer should listen for client connections. Changing this value causes PgBouncer to restart.
         */
        "port"?: number;
        /**
         * Priority class name for the pgBouncer pod. Changing this value causes PostgreSQL to restart. More info: https://kubernetes.io/docs/concepts/scheduling-eviction/pod-priority-preemption/
         */
        "priorityClassName"?: string;
        /**
         * Number of desired PgBouncer pods.
         */
        "replicas"?: number;
        /**
         * Compute resources of a PgBouncer container. Changing this value causes PgBouncer to restart. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers
         */
        "resources"?: {
          /**
           * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
           */
          "limits"?: {
            [key: string]: any;
          };
          /**
           * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
           */
          "requests"?: {
            [key: string]: any;
          };
        };
        /**
         * Specification of the service that exposes PgBouncer.
         */
        "service"?: {
          /**
           * More info: https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types
           */
          "type": "ClusterIP" | "NodePort" | "LoadBalancer";
        };
        /**
         * Configuration for pgBouncer sidecar containers
         */
        "sidecars"?: {
          /**
           * Defines the configuration for the pgBouncer config sidecar container
           */
          "pgbouncerConfig"?: {
            /**
             * Resource requirements for a sidecar container
             */
            "resources"?: {
              /**
               * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
               */
              "limits"?: {
                [key: string]: any;
              };
              /**
               * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
               */
              "requests"?: {
                [key: string]: any;
              };
            };
          };
        };
        /**
         * Tolerations of a PgBouncer pod. Changing this value causes PgBouncer to restart. More info: https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration
         */
        "tolerations"?: Array<{
          /**
           * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
           */
          "effect"?: string;
          /**
           * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
           */
          "key"?: string;
          /**
           * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
           */
          "operator"?: string;
          /**
           * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
           */
          "tolerationSeconds"?: number;
          /**
           * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
           */
          "value"?: string;
        }>;
        /**
         * Topology spread constraints of a PgBouncer pod. Changing this value causes PgBouncer to restart. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-topology-spread-constraints/
         */
        "topologySpreadConstraints"?: Array<{
          /**
           * LabelSelector is used to find matching pods. Pods that match this label selector are counted to determine the number of pods in their corresponding topology domain.
           */
          "labelSelector"?: {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            "matchExpressions"?: Array<{
              /**
               * key is the label key that the selector applies to.
               */
              "key": string;
              /**
               * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
               */
              "operator": string;
              /**
               * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
               */
              "values"?: Array<string>;
            }>;
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            "matchLabels"?: {
              [key: string]: string;
            };
          };
          /**
           * MaxSkew describes the degree to which pods may be unevenly distributed. When `whenUnsatisfiable=DoNotSchedule`, it is the maximum permitted difference between the number of matching pods in the target topology and the global minimum. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 1/1/0: | zone1 | zone2 | zone3 | |   P   |   P   |       | - if MaxSkew is 1, incoming pod can only be scheduled to zone3 to become 1/1/1; scheduling it onto zone1(zone2) would make the ActualSkew(2-0) on zone1(zone2) violate MaxSkew(1). - if MaxSkew is 2, incoming pod can be scheduled onto any zone. When `whenUnsatisfiable=ScheduleAnyway`, it is used to give higher precedence to topologies that satisfy it. It's a required field. Default value is 1 and 0 is not allowed.
           */
          "maxSkew": number;
          /**
           * TopologyKey is the key of node labels. Nodes that have a label with this key and identical values are considered to be in the same topology. We consider each <key, value> as a "bucket", and try to put balanced number of pods into each bucket. It's a required field.
           */
          "topologyKey": string;
          /**
           * WhenUnsatisfiable indicates how to deal with a pod if it doesn't satisfy the spread constraint. - DoNotSchedule (default) tells the scheduler not to schedule it. - ScheduleAnyway tells the scheduler to schedule the pod in any location,   but giving higher precedence to topologies that would help reduce the   skew. A constraint is considered "Unsatisfiable" for an incoming pod if and only if every possible node assigment for that pod would violate "MaxSkew" on some topology. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 3/1/1: | zone1 | zone2 | zone3 | | P P P |   P   |   P   | If WhenUnsatisfiable is set to DoNotSchedule, incoming pod can only be scheduled to zone2(zone3) to become 3/2/1(3/1/2) as ActualSkew(2-1) on zone2(zone3) satisfies MaxSkew(1). In other words, the cluster can still be imbalanced, but scheduler won't make it \*more\* imbalanced. It's a required field.
           */
          "whenUnsatisfiable": string;
        }>;
      };
    };
    /**
     * Specification of the service that exposes the PostgreSQL primary instance.
     */
    "service"?: {
      /**
       * More info: https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types
       */
      "type": "ClusterIP" | "NodePort" | "LoadBalancer";
    };
    /**
     * Whether or not the PostgreSQL cluster should be stopped. When this is true, workloads are scaled to zero and CronJobs are suspended. Other resources, such as Services and Volumes, remain in place.
     */
    "shutdown"?: boolean;
    /**
     * Run this cluster as a read-only copy of an existing cluster or archive.
     */
    "standby"?: {
      /**
       * Whether or not the PostgreSQL cluster should be read-only. When this is true, WAL files are applied from the pgBackRest repository.
       */
      "enabled"?: boolean;
      /**
       * The name of the pgBackRest repository to follow for WAL files.
       */
      "repoName": string;
    };
    /**
     * A list of group IDs applied to the process of a container. These can be useful when accessing shared file systems with constrained permissions. More info: https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/#security-context
     */
    "supplementalGroups"?: Array<number>;
    /**
     * Users to create inside PostgreSQL and the databases they should access. The default creates one user that can access one database matching the PostgresCluster name. An empty list creates no users. Removing a user from this list does NOT drop the user nor revoke their access.
     */
    "users"?: Array<{
      /**
       * Databases to which this user can connect and create objects. Removing a database from this list does NOT revoke access. This field is ignored for the "postgres" user.
       */
      "databases"?: Array<string>;
      /**
       * The name of this PostgreSQL user. The value may contain only lowercase letters, numbers, and hyphen so that it fits into Kubernetes metadata.
       */
      "name": string;
      /**
       * ALTER ROLE options except for PASSWORD. This field is ignored for the "postgres" user. More info: https://www.postgresql.org/docs/current/role-attributes.html
       */
      "options"?: string;
    }>;
  };
  /**
   * PostgresClusterStatus defines the observed state of PostgresCluster
   */
  "status"?: {
    /**
     * conditions represent the observations of postgrescluster's current state. Known .status.conditions.type are: "PersistentVolumeResizing", "ProxyAvailable"
     */
    "conditions"?: Array<{
      /**
       * lastTransitionTime is the last time the condition transitioned from one status to another. This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
       */
      "lastTransitionTime": string;
      /**
       * message is a human readable message indicating details about the transition. This may be an empty string.
       */
      "message": string;
      /**
       * observedGeneration represents the .metadata.generation that the condition was set based upon. For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date with respect to the current state of the instance.
       */
      "observedGeneration"?: number;
      /**
       * reason contains a programmatic identifier indicating the reason for the condition's last transition. Producers of specific condition types may define expected values and meanings for this field, and whether the values are considered a guaranteed API. The value should be a CamelCase string. This field may not be empty.
       */
      "reason": string;
      /**
       * status of the condition, one of True, False, Unknown.
       */
      "status": "True" | "False" | "Unknown";
      /**
       * type of condition in CamelCase or in foo.example.com/CamelCase. --- Many .condition.type values are consistent across resources like Available, but because arbitrary conditions can be useful (see .node.status.conditions), the ability to deconflict is important. The regex it matches is (dns1123SubdomainFmt/)?(qualifiedNameFmt)
       */
      "type": string;
    }>;
    /**
     * DatabaseInitSQL state of custom database initialization in the cluster
     */
    "databaseInitSQL"?: string;
    /**
     * Identifies the databases that have been installed into PostgreSQL.
     */
    "databaseRevision"?: string;
    /**
     * Current state of PostgreSQL instances.
     */
    "instances"?: Array<{
      "name": string;
      /**
       * Total number of ready pods.
       */
      "readyReplicas"?: number;
      /**
       * Total number of non-terminated pods.
       */
      "replicas"?: number;
      /**
       * Total number of non-terminated pods that have the desired specification.
       */
      "updatedReplicas"?: number;
    }>;
    /**
     * Current state of PostgreSQL cluster monitoring tool configuration
     */
    "monitoring"?: {
      "exporterConfiguration"?: string;
    };
    /**
     * observedGeneration represents the .metadata.generation on which the status was based.
     */
    "observedGeneration"?: number;
    "patroni"?: {
      /**
       * The PostgreSQL system identifier reported by Patroni.
       */
      "systemIdentifier"?: string;
    };
    /**
     * Status information for pgBackRest
     */
    "pgbackrest"?: {
      /**
       * Status information for manual backups
       */
      "manualBackup"?: {
        /**
         * The number of actively running manual backup Pods.
         */
        "active"?: number;
        /**
         * Represents the time the manual backup Job was determined by the Job controller to be completed.  This field is only set if the backup completed successfully. Additionally, it is represented in RFC3339 form and is in UTC.
         */
        "completionTime"?: string;
        /**
         * The number of Pods for the manual backup Job that reached the "Failed" phase.
         */
        "failed"?: number;
        /**
         * Specifies whether or not the Job is finished executing (does not indicate success or failure).
         */
        "finished": boolean;
        /**
         * A unique identifier for the manual backup as provided using the "pgbackrest-backup" annotation when initiating a backup.
         */
        "id": string;
        /**
         * Represents the time the manual backup Job was acknowledged by the Job controller. It is represented in RFC3339 form and is in UTC.
         */
        "startTime"?: string;
        /**
         * The number of Pods for the manual backup Job that reached the "Succeeded" phase.
         */
        "succeeded"?: number;
      };
      /**
       * Status information for the pgBackRest dedicated repository host
       */
      "repoHost"?: {
        /**
         * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
         */
        "apiVersion"?: string;
        /**
         * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
         */
        "kind"?: string;
        /**
         * Whether or not the pgBackRest repository host is ready for use
         */
        "ready"?: boolean;
      };
      /**
       * Status information for pgBackRest repositories
       */
      "repos"?: Array<{
        /**
         * Whether or not the pgBackRest repository PersistentVolumeClaim is bound to a volume
         */
        "bound"?: boolean;
        /**
         * The name of the pgBackRest repository
         */
        "name": string;
        /**
         * ReplicaCreateBackupReady indicates whether a backup exists in the repository as needed to bootstrap replicas.
         */
        "replicaCreateBackupComplete"?: boolean;
        /**
         * A hash of the required fields in the spec for defining an Azure, GCS or S3 repository, Utilizd to detect changes to these fields and then execute pgBackRest stanza-create commands accordingly.
         */
        "repoOptionsHash"?: string;
        /**
         * Specifies whether or not a stanza has been successfully created for the repository
         */
        "stanzaCreated"?: boolean;
        /**
         * The name of the volume the containing the pgBackRest repository
         */
        "volume"?: string;
      }>;
      /**
       * Status information for in-place restores
       */
      "restore"?: {
        /**
         * The number of actively running manual backup Pods.
         */
        "active"?: number;
        /**
         * Represents the time the manual backup Job was determined by the Job controller to be completed.  This field is only set if the backup completed successfully. Additionally, it is represented in RFC3339 form and is in UTC.
         */
        "completionTime"?: string;
        /**
         * The number of Pods for the manual backup Job that reached the "Failed" phase.
         */
        "failed"?: number;
        /**
         * Specifies whether or not the Job is finished executing (does not indicate success or failure).
         */
        "finished": boolean;
        /**
         * A unique identifier for the manual backup as provided using the "pgbackrest-backup" annotation when initiating a backup.
         */
        "id": string;
        /**
         * Represents the time the manual backup Job was acknowledged by the Job controller. It is represented in RFC3339 form and is in UTC.
         */
        "startTime"?: string;
        /**
         * The number of Pods for the manual backup Job that reached the "Succeeded" phase.
         */
        "succeeded"?: number;
      };
      /**
       * Status information for scheduled backups
       */
      "scheduledBackups"?: Array<{
        /**
         * The number of actively running manual backup Pods.
         */
        "active"?: number;
        /**
         * Represents the time the manual backup Job was determined by the Job controller to be completed.  This field is only set if the backup completed successfully. Additionally, it is represented in RFC3339 form and is in UTC.
         */
        "completionTime"?: string;
        /**
         * The name of the associated pgBackRest scheduled backup CronJob
         */
        "cronJobName"?: string;
        /**
         * The number of Pods for the manual backup Job that reached the "Failed" phase.
         */
        "failed"?: number;
        /**
         * The name of the associated pgBackRest repository
         */
        "repo"?: string;
        /**
         * Represents the time the manual backup Job was acknowledged by the Job controller. It is represented in RFC3339 form and is in UTC.
         */
        "startTime"?: string;
        /**
         * The number of Pods for the manual backup Job that reached the "Succeeded" phase.
         */
        "succeeded"?: number;
        /**
         * The pgBackRest backup type for this Job
         */
        "type"?: string;
      }>;
    };
    /**
     * Current state of the PostgreSQL proxy.
     */
    "proxy"?: {
      "pgBouncer"?: {
        /**
         * Identifies the revision of PgBouncer assets that have been installed into PostgreSQL.
         */
        "postgresRevision"?: string;
        /**
         * Total number of ready pods.
         */
        "readyReplicas"?: number;
        /**
         * Total number of non-terminated pods.
         */
        "replicas"?: number;
      };
    };
    /**
     * The instance that should be started first when bootstrapping and/or starting a PostgresCluster.
     */
    "startupInstance"?: string;
    /**
     * The instance set associated with the startupInstance
     */
    "startupInstanceSet"?: string;
    /**
     * Identifies the users that have been installed into PostgreSQL.
     */
    "usersRevision"?: string;
  };
}

/**
 * PostgresCluster is the Schema for the postgresclusters API
 */
export class PostgresCluster extends Model<IPostgresCluster> implements IPostgresCluster {
  "apiVersion": IPostgresCluster["apiVersion"];
  "kind": IPostgresCluster["kind"];
  "metadata"?: IPostgresCluster["metadata"];
  "spec"?: IPostgresCluster["spec"];
  "status"?: IPostgresCluster["status"];

static apiVersion: IPostgresCluster["apiVersion"] = "postgres-operator.crunchydata.com/v1beta1";
static kind: IPostgresCluster["kind"] = "PostgresCluster";
static is = createTypeMetaGuard<IPostgresCluster>(PostgresCluster);

constructor(data?: ModelData<IPostgresCluster>) {
  super({
    apiVersion: PostgresCluster.apiVersion,
    kind: PostgresCluster.kind,
    ...data
  } as IPostgresCluster);
}
}


setSchema(PostgresCluster, schemaId, () => {
  addSchema();
  register(schemaId, schema);
});
