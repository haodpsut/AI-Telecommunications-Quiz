
import type { Term, QuizTopic } from './types';

export const TOTAL_QUESTIONS = 10;

export interface Topic {
  name: string;
  terms: Term[];
}

const telecomTerms: Term[] = [
    { "term": "5G NR (New Radio)", "definition": "The global standard for a unified, more capable 5G wireless air interface." },
    { "term": "Latency", "definition": "The time delay for a data packet to travel from a source to a destination." },
    { "term": "Bandwidth", "definition": "The maximum rate of data transfer across a given path." },
    { "term": "MIMO (Multiple-Input Multiple-Output)", "definition": "Using multiple antennas at both the transmitter and receiver to improve communication performance." },
    { "term": "Beamforming", "definition": "A signal processing technique used to direct wireless signals to a specific receiving device." },
    { "term": "OFDMA (Orthogonal Frequency Division Multiple Access)", "definition": "A multi-user version of OFDM that allows simultaneous data transmission to several users." },
    { "term": "Network Slicing", "definition": "A virtual network architecture that allows multiple virtualized networks to be created on top of a common physical infrastructure." },
    { "term": "QAM (Quadrature Amplitude Modulation)", "definition": "A modulation scheme that conveys data by changing the amplitude of two carrier waves." },
    { "term": "SNR (Signal-to-Noise Ratio)", "definition": "A measure used in science and engineering that compares the level of a desired signal to the level of background noise." },
    { "term": "Path Loss", "definition": "The reduction in power density of an electromagnetic wave as it propagates through space." },
    { "term": "Handover / Handoff", "definition": "The process of transferring an ongoing call or data session from one channel connected to the core network to another." },
    { "term": "FDD (Frequency Division Duplex)", "definition": "A duplexing method where uplink and downlink transmissions occur on different frequency bands." },
    { "term": "TDD (Time Division Duplex)", "definition": "A duplexing method where uplink and downlink transmissions occur on the same frequency band but at different time slots." },
    { "term": "Carrier Aggregation", "definition": "A technique used to increase the data rate per user by combining multiple frequency bands." },
    { "term": "Small Cells", "definition": "Low-powered radio access nodes that have a range of 10 meters to a few kilometers." },
    { "term": "VoLTE (Voice over LTE)", "definition": "A standard for high-speed wireless communication for mobile phones and data terminals, including the Internet of things." },
    { "term": "RTT (Round-Trip Time)", "definition": "The length of time it takes for a signal to be sent plus the length of time it takes for an acknowledgment of that signal to be received." },
    { "term": "Backhaul", "definition": "The portion of a network that comprises the intermediate links between the core network and the small subnetworks at the 'edge' of the entire hierarchical network." },
    { "term": "Edge Computing", "definition": "A distributed computing paradigm that brings computation and data storage closer to the sources of data." },
    { "term": "IoT (Internet of Things)", "definition": "A system of interrelated computing devices, mechanical and digital machines that are provided with unique identifiers." },
    { "term": "eMBB (Enhanced Mobile Broadband)", "definition": "A 5G use case that focuses on providing significantly faster data rates and better user experience." },
    { "term": "URLLC (Ultra-Reliable Low-Latency Communication)", "definition": "A 5G use case for mission-critical applications that require uninterrupted and robust data exchange." },
    { "term": "mMTC (Massive Machine-Type Communications)", "definition": "A 5G use case that focuses on connecting a massive number of low-power, low-cost devices." },
    { "term": "RAN (Radio Access Network)", "definition": "A type of network infrastructure used in mobile telecommunications that connects user equipment to the core network." },
    { "term": "Virtual RAN (vRAN)", "definition": "A RAN implementation where the baseband unit functions are virtualized and run on general-purpose hardware." },
    { "term": "Open RAN (O-RAN)", "definition": "A movement to disaggregate traditional RAN systems into open and interoperable components." },
    { "term": "Spectrum", "definition": "The range of electromagnetic frequencies used for wireless communication." },
    { "term": "Sub-6 GHz", "definition": "5G frequencies below 6 GHz, providing a balance of coverage and capacity." },
    { "term": "mmWave (Millimeter Wave)", "definition": "Very high-frequency bands (typically 24 GHz and above) used for 5G, offering massive capacity but limited range." },
    { "term": "Throughput", "definition": "The actual rate of successful data transfer over a communication channel." },
    { "term": "Codec (Coder-Decoder)", "definition": "A device or computer program which encodes or decodes a digital data stream or signal." },
    { "term": "Jitter", "definition": "The variation in the delay of received packets in a data stream over a network." },
    { "term": "Packet Loss", "definition": "Occurs when one or more packets of data traveling across a computer network fail to reach their destination." },
    { "term": "Duplexing", "definition": "A point-to-point system composed of two or more connected parties or devices that can communicate with one another in both directions." },
    { "term": "Multiplexing", "definition": "A method by which multiple analog or digital signals are combined into one signal over a shared medium." },
    { "term": "IMSI (International Mobile Subscriber Identity)", "definition": "A unique number, usually 15 digits, associated with all cellular network users." },
    { "term": "IMEI (International Mobile Equipment Identity)", "definition": "A unique number for identifying a device on a mobile network." },
    { "term": "SIM (Subscriber Identity Module)", "definition": "An integrated circuit that securely stores the IMSI and the related key used to identify and authenticate subscribers." },
    { "term": "eSIM (Embedded SIM)", "definition": "A digital SIM that allows you to activate a cellular plan from your carrier without having to use a physical SIM card." },
    { "term": "LTE (Long-Term Evolution)", "definition": "A standard for wireless broadband communication for mobile devices and data terminals, based on the GSM/EDGE and UMTS/HSPA technologies." },
    { "term": "Wi-Fi 6 (802.11ax)", "definition": "The next-generation standard in WiFi technology, also known as 'AX WiFi'." },
    { "term": "Bluetooth", "definition": "A short-range wireless technology standard that is used for exchanging data between fixed and mobile devices over short distances." },
    { "term": "NFC (Near Field Communication)", "definition": "A set of communication protocols for communication between two electronic devices over a distance of 4 cm or less." },
    { "term": "HetNet (Heterogeneous Network)", "definition": "A network that connects computers and other devices with different operating systems and/or protocols." },
    { "term": "RoI (Region of Interest)", "definition": "A selected subset of samples within a dataset identified for a particular purpose." },
    { "term": "CSI (Channel State Information)", "definition": "The known channel properties of a communication link." },
    { "term": "Modulation", "definition": "The process of varying one or more properties of a periodic waveform, called the carrier signal, with a modulating signal that typically contains information to be transmitted." },
    { "term": "Demodulation", "definition": "The act of extracting the original information-bearing signal from a modulated carrier wave." },
    { "term": "Frequency Reuse", "definition": "The system of assigning and reusing frequencies to improve efficiency and capacity in cellular networks." },
    { "term": "Cellular Network", "definition": "A communication network where the last link is wireless. The network is distributed over land areas called cells, each served by at least one fixed-location transceiver." },
    { "term": "RIS (Reconfigurable Intelligent Surface)", "definition": "A programmable surface that can manipulate electromagnetic waves to improve wireless communication." },
    { "term": "Coverage", "definition": "The geographical area where a particular service, like cellular reception, is available." },
    { "term": "Connection Time", "definition": "The duration required to establish a communication link between two or more points." }
];

export const TOPICS: Record<QuizTopic, Topic> = {
    telecom: {
        name: "Telecommunications",
        terms: telecomTerms
    },
    quantum: {
        name: "Quantum",
        terms: [
            { "term": "Qubit", "definition": "The basic unit of quantum information, the quantum analogue of the classical bit." },
            { "term": "Superposition", "definition": "A fundamental principle of quantum mechanics where a quantum system can exist in multiple states at the same time." },
            { "term": "Entanglement", "definition": "A quantum mechanical phenomenon in which the quantum states of two or more objects have to be described with reference to each other, even though the individual objects may be spatially separated." },
            { "term": "Quantum Gate", "definition": "A basic quantum circuit operating on a small number of qubits. They are the building blocks of quantum circuits, like classical logic gates are for conventional digital circuits." },
            { "term": "Quantum Computing", "definition": "An area of computing focused on developing computer technology based on the principles of quantum theory." },
            { "term": "Quantum Inspired", "definition": "Classical algorithms or computing models that are inspired by concepts from quantum mechanics, but run on classical computers." },
            { "term": "QML (Quantum Machine Learning)", "definition": "An emerging interdisciplinary research area that explores the interplay of quantum computing and machine learning." },
            { "term": "Decoherence", "definition": "The loss of quantum coherence, where a quantum system loses its quantum properties due to interaction with its environment." },
            { "term": "Shor's Algorithm", "definition": "A quantum algorithm for integer factorization, which is exponentially faster than the best-known classical algorithm." },
            { "term": "Grover's Algorithm", "definition": "A quantum algorithm for searching an unsorted database, which provides a quadratic speedup over classical algorithms." },
        ]
    },
    qrl: {
        name: "Quantum Reinforcement Learning",
        terms: [
            { "term": "Quantum Reinforcement Learning (QRL)", "definition": "A field that combines quantum computing with reinforcement learning to potentially achieve speedups or performance improvements for certain RL tasks." },
            { "term": "Quantum Agent", "definition": "An agent in a reinforcement learning framework whose decision-making process (policy) is implemented using a quantum circuit or algorithm." },
            { "term": "Variational Quantum Circuit (VQC)", "definition": "A hybrid quantum-classical algorithm where a classical optimizer is used to train the parameters of a quantum circuit to solve a specific problem." },
            { "term": "Quantum State Representation", "definition": "Using quantum states (qubits) to encode the state of the environment in a reinforcement learning problem." },
            { "term": "Quantum Policy Gradient", "definition": "A QRL algorithm that uses a parameterized quantum circuit to represent the policy and updates its parameters using a gradient-based method." },
            { "term": "Hybrid Quantum-Classical RL", "definition": "Reinforcement learning models that leverage both classical and quantum processors to perform learning tasks." },
            { "term": "Quantum Environment", "definition": "An environment in reinforcement learning where the dynamics or states are governed by the principles of quantum mechanics." },
            { "term": "Quantum-enhanced Experience Replay", "definition": "Using quantum algorithms, such as Grover's search, to potentially speed up the process of sampling from the experience replay buffer in RL." },
            { "term": "Parameter Shift Rule", "definition": "A method to analytically compute gradients of expectation values of parameterized quantum circuits, often used in training VQCs for QML and QRL." },
            { "term": "Projective Measurement", "definition": "A type of quantum measurement used to extract classical information from a quantum state, often used to determine an agent's action in QRL." },
        ]
    }
};
