/* eslint-disable react/react-in-jsx-scope */
import { motion } from 'framer-motion'
import './home.css'
export function Home() {
  return (
    <div className="Wrapper">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            translateX: '100px',
            opacity: 0,
          },
          visible: {
            translateX: '0px',
            opacity: 1,
            transition: {
              delay: 0.2,
              type: 'spring',
              duration: 0.5,
            },
          },
        }}
        className="Arrow"
      />

      <div className="Bundle">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              translateX: '100px',
              opacity: 0,
            },
            visible: {
              translateX: '0px',
              opacity: 1,
              transition: {
                delay: 0.2,
                type: 'spring',
                duration: 0.6,
              },
            },
          }}
          className="Chunck"
        >
          <motion.div
            className="ThreeLinePrimaryV1"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                translateX: '100px',
                opacity: 0,
              },
              visible: {
                translateX: '0px',
                opacity: 1,
                transition: {
                  delay: 0.6,
                  type: 'spring',
                  duration: 0.8,
                },
              },
            }}
          />
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                translateX: '100px',
                opacity: 0,
              },
              visible: {
                translateX: '0px',
                opacity: 1,
                transition: {
                  delay: 0.8,
                  type: 'spring',
                  duration: 1,
                },
              },
            }}
            className="ThreeLineSecondaryV1"
          />
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                translateX: '100px',
                opacity: 0,
              },
              visible: {
                translateX: '0px',
                opacity: 1,
                transition: {
                  delay: 1,
                  type: 'spring',
                  duration: 1.2,
                },
              },
            }}
            className="ThreeLineTertiaryV1"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              translateX: '100px',
              opacity: 0,
            },
            visible: {
              translateX: '0px',
              opacity: 1,
              transition: {
                delay: 0.4,
                type: 'spring',
                duration: 1,
              },
            },
          }}
          className="OneLinePrimary"
        />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              translateX: '100px',
              opacity: 0,
            },
            visible: {
              translateX: '0px',
              opacity: 1,
              transition: {
                delay: 0.2,
                type: 'spring',
                duration: 0.6,
              },
            },
          }}
          className="Chunck"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                translateX: '100px',
                opacity: 0,
              },
              visible: {
                translateX: '0px',
                opacity: 1,
                transition: {
                  delay: 0.6,
                  type: 'spring',
                  duration: 0.8,
                },
              },
            }}
            className="FourLinePrimaryV1"
          />
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                translateX: '100px',
                opacity: 0,
              },
              visible: {
                translateX: '0px',
                opacity: 1,
                transition: {
                  delay: 0.8,
                  type: 'spring',
                  duration: 1,
                },
              },
            }}
            className="FourLineSecondaryV1"
          />
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                translateX: '100px',
                opacity: 0,
              },
              visible: {
                translateX: '0px',
                opacity: 1,
                transition: {
                  delay: 1,
                  type: 'spring',
                  duration: 1.2,
                },
              },
            }}
            className="FourLineTertiaryV1"
          />
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                translateX: '100px',
                opacity: 0,
              },
              visible: {
                translateX: '0px',
                opacity: 1,
                transition: {
                  delay: 1.2,
                  type: 'spring',
                  duration: 1.4,
                },
              },
            }}
            className="FourLinePreventionV1"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              translateX: '100px',
              opacity: 0,
            },
            visible: {
              translateX: '0px',
              opacity: 1,
              transition: {
                delay: 0.2,
                type: 'spring',
                duration: 0.6,
              },
            },
          }}
          className="Chunck"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                translateX: '100px',
                opacity: 0,
              },
              visible: {
                translateX: '0px',
                opacity: 1,
                transition: {
                  delay: 0.6,
                  type: 'spring',
                  duration: 0.8,
                },
              },
            }}
            className="FourLinePrimaryV2"
          />
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                translateX: '100px',
                opacity: 0,
              },
              visible: {
                translateX: '0px',
                opacity: 1,
                transition: {
                  delay: 0.8,
                  type: 'spring',
                  duration: 1,
                },
              },
            }}
            className="FourLineSecondaryV2"
          />
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                translateX: '100px',
                opacity: 0,
              },
              visible: {
                translateX: '0px',
                opacity: 1,
                transition: {
                  delay: 1,
                  type: 'spring',
                  duration: 1.2,
                },
              },
            }}
            className="FourLineTertiaryV2"
          />
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                translateX: '100px',
                opacity: 0,
              },
              visible: {
                translateX: '0px',
                opacity: 1,
                transition: {
                  delay: 1.2,
                  type: 'spring',
                  duration: 1.4,
                },
              },
            }}
            className="FourLinePreventionV2"
          />
        </motion.div>

        <br />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              translateX: '100px',
              opacity: 0,
            },
            visible: {
              translateX: '0px',
              opacity: 1,
              transition: {
                delay: 0.2,
                type: 'spring',
                duration: 0.6,
              },
            },
          }}
          className="DistanceLeftChunck"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                translateX: '100px',
                opacity: 0,
              },
              visible: {
                translateX: '0px',
                opacity: 1,
                transition: {
                  delay: 0.6,
                  type: 'spring',
                  duration: 0.8,
                },
              },
            }}
            className="FourLinePrimaryV3"
          />
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                translateX: '100px',
                opacity: 0,
              },
              visible: {
                translateX: '0px',
                opacity: 1,
                transition: {
                  delay: 0.8,
                  type: 'spring',
                  duration: 1,
                },
              },
            }}
            className="FourLineSecondaryV3"
          />
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                translateX: '100px',
                opacity: 0,
              },
              visible: {
                translateX: '0px',
                opacity: 1,
                transition: {
                  delay: 1,
                  type: 'spring',
                  duration: 1.2,
                },
              },
            }}
            className="FourLineTertiaryV3"
          />
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                translateX: '100px',
                opacity: 0,
              },
              visible: {
                translateX: '0px',
                opacity: 1,
                transition: {
                  delay: 1.2,
                  type: 'spring',
                  duration: 1.4,
                },
              },
            }}
            className="FourLinePreventionV3"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              translateX: '100px',
              opacity: 0,
            },
            visible: {
              translateX: '0px',
              opacity: 1,
              transition: {
                delay: 0.4,
                type: 'spring',
                duration: 0.6,
              },
            },
          }}
          className="Name"
        >
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                translateX: '100px',
                opacity: 0,
              },
              visible: {
                translateX: '0px',
                opacity: 1,
                transition: {
                  delay: 0.8,
                  type: 'spring',
                  duration: 1,
                },
              },
            }}
            className="Title"
          >
            Miraya Tech
          </motion.h1>
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                translateX: '100px',
                opacity: 0,
              },
              visible: {
                translateX: '0px',
                opacity: 1,
                transition: {
                  delay: 0.8,
                  type: 'spring',
                  duration: 1,
                },
              },
            }}
            className="Subtitle"
          >
            Frontend Developer
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              translateX: '100px',
              opacity: 0,
            },
            visible: {
              translateX: '0px',
              opacity: 1,
              transition: {
                delay: 0.2,
                type: 'spring',
                duration: 0.6,
              },
            },
          }}
          className="Chunck"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                translateX: '100px',
                opacity: 0,
              },
              visible: {
                translateX: '0px',
                opacity: 1,
                transition: {
                  delay: 0.6,
                  type: 'spring',
                  duration: 0.8,
                },
              },
            }}
            className="TwoLinePrimaryV1"
          />
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                translateX: '100px',
                opacity: 0,
              },
              visible: {
                translateX: '0px',
                opacity: 1,
                transition: {
                  delay: 0.8,
                  type: 'spring',
                  duration: 1,
                },
              },
            }}
            className="TwoLineSecondaryV1"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              translateX: '100px',
              opacity: 0,
            },
            visible: {
              translateX: '0px',
              opacity: 1,
              transition: {
                delay: 0.2,
                type: 'spring',
                duration: 0.6,
              },
            },
          }}
          className="Chunck"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                translateX: '100px',
                opacity: 0,
              },
              visible: {
                translateX: '0px',
                opacity: 1,
                transition: {
                  delay: 0.6,
                  type: 'spring',
                  duration: 0.8,
                },
              },
            }}
            className="ThreeLinePrimaryV2"
          />
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                translateX: '100px',
                opacity: 0,
              },
              visible: {
                translateX: '0px',
                opacity: 1,
                transition: {
                  delay: 0.8,
                  type: 'spring',
                  duration: 1,
                },
              },
            }}
            className="ThreeLineSecondaryV2"
          />
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                translateX: '100px',
                opacity: 0,
              },
              visible: {
                translateX: '0px',
                opacity: 1,
                transition: {
                  delay: 1,
                  type: 'spring',
                  duration: 1.2,
                },
              },
            }}
            className="ThreeLineTertiaryV2"
          />
        </motion.div>

        <br />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              translateX: '100px',
              opacity: 0,
            },
            visible: {
              translateX: '0px',
              opacity: 1,
              transition: {
                delay: 0.2,
                type: 'spring',
                duration: 0.6,
              },
            },
          }}
          className="Chunck"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                translateX: '100px',
                opacity: 0,
              },
              visible: {
                translateX: '0px',
                opacity: 1,
                transition: {
                  delay: 0.8,
                  type: 'spring',
                  duration: 1,
                },
              },
            }}
            className="TwoLinePrimaryV2"
          />
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                translateX: '100px',
                opacity: 0,
              },
              visible: {
                translateX: '0px',
                opacity: 1,
                transition: {
                  delay: 1,
                  type: 'spring',
                  duration: 1.2,
                },
              },
            }}
            className="TwoLineSecondaryV2"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              translateX: '100px',
              opacity: 0,
            },
            visible: {
              translateX: '0px',
              opacity: 1,
              transition: {
                delay: 0.4,
                type: 'spring',
                duration: 1,
              },
            },
          }}
          className="OneLineSecondary"
        />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              translateX: '100px',
              opacity: 0,
            },
            visible: {
              translateX: '0px',
              opacity: 1,
              transition: {
                delay: 0.2,
                type: 'spring',
                duration: 0.6,
              },
            },
          }}
          className="Chunck"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                translateX: '100px',
                opacity: 0,
              },
              visible: {
                translateX: '0px',
                opacity: 1,
                transition: {
                  delay: 0.6,
                  type: 'spring',
                  duration: 0.8,
                },
              },
            }}
            className="FourLinePrimaryV4"
          />
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                translateX: '100px',
                opacity: 0,
              },
              visible: {
                translateX: '0px',
                opacity: 1,
                transition: {
                  delay: 0.8,
                  type: 'spring',
                  duration: 1,
                },
              },
            }}
            className="FourLineSecondaryV4"
          />
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                translateX: '100px',
                opacity: 0,
              },
              visible: {
                translateX: '0px',
                opacity: 1,
                transition: {
                  delay: 1,
                  type: 'spring',
                  duration: 1.2,
                },
              },
            }}
            className="FourLineTertiaryV4"
          />
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                translateX: '100px',
                opacity: 0,
              },
              visible: {
                translateX: '0px',
                opacity: 1,
                transition: {
                  delay: 1.2,
                  type: 'spring',
                  duration: 1.4,
                },
              },
            }}
            className="FourLinePreventionV4"
          />
        </motion.div>
      </div>
    </div>
  )
}
