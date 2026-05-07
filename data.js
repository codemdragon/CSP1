const TOPICS = [
{id:"comm",icon:"🌐",title:"Networks & Topologies",notes:`
<h3>Network Types</h3>
<ul>
<li><strong>LAN</strong> – Small area (building). Hardware owned by org.</li>
<li><strong>WAN</strong> – Large area (cities/countries). Uses PSTN/satellites.</li>
</ul>
<h3>Topologies</h3>
<ul>
<li><strong>Bus</strong> – Single shared cable (backbone). Cheap but single point of failure.</li>
<li><strong>Star</strong> – All nodes → central switch/hub. Most common. Hub fails = all fail.</li>
<li><strong>Mesh</strong> – Nodes interconnected. Redundant. Used in Internet backbone.</li>
</ul>
<h3>Client-Server vs P2P</h3>
<ul>
<li><strong>Client-Server</strong>: Central server provides resources. Thin client (server does processing) vs Thick client (local processing).</li>
<li><strong>P2P</strong>: Equal nodes share resources directly. No central point.</li>
</ul>`,
quiz:[
{q:"Which topology uses a single shared cable?",opts:["Star","Bus","Mesh","Ring"],ans:1,exp:"Bus topology uses one backbone cable all devices connect to."},
{q:"In a star topology, what happens if the central hub fails?",opts:["Only one node fails","Nothing","Entire network fails","Network slows down"],ans:2,exp:"All communication goes through the hub, so if it fails, the whole network goes down."},
{q:"What type of client does most processing on the server?",opts:["Thick client","Thin client","Fat client","Smart client"],ans:1,exp:"Thin client relies on the server for most processing."},
{q:"LAN stands for?",opts:["Large Area Network","Local Access Network","Local Area Network","Linked Area Network"],ans:2,exp:"LAN = Local Area Network, covers a small geographical area."},
{q:"Which topology provides the most redundancy?",opts:["Bus","Star","Ring","Mesh"],ans:3,exp:"Mesh has multiple paths between nodes, providing maximum redundancy."}
]},

{id:"hw-proto",icon:"🔌",title:"Hardware & Protocols",notes:`
<h3>Network Hardware</h3>
<ul>
<li><strong>Router</strong> – Connects different networks, selects best path for data packets.</li>
<li><strong>Switch</strong> – Connects devices within a LAN using MAC addresses.</li>
<li><strong>NIC</strong> – Network Interface Card, gives each device a unique MAC address.</li>
</ul>
<h3>Transmission Media</h3>
<ul>
<li><strong>Twisted Pair</strong> (copper) – Cheap, short distances</li>
<li><strong>Fibre-optic</strong> (light) – Fast, long distances, no interference</li>
<li><strong>Wireless</strong> – Radio/Microwave/Infrared</li>
</ul>
<h3>IP Addressing</h3>
<ul>
<li><strong>IPv4</strong>: 32-bit, dotted decimal (e.g. 192.168.1.1)</li>
<li><strong>IPv6</strong>: 128-bit, hexadecimal notation</li>
<li><strong>Public IP</strong> – Unique on internet. <strong>Private IP</strong> – Used within LAN.</li>
</ul>
<h3>DNS</h3>
<p>Domain Name System – Translates domain names (google.com) → IP addresses. Like a phonebook for the internet.</p>`,
quiz:[
{q:"What does a router do?",opts:["Connects devices in a LAN","Connects different networks","Assigns IP addresses","Stores data"],ans:1,exp:"A router connects different networks and selects the best path for packets."},
{q:"A switch uses ___ addresses to forward data.",opts:["IP","MAC","DNS","URL"],ans:1,exp:"Switches operate at data link layer using MAC addresses."},
{q:"IPv4 addresses are how many bits?",opts:["16","64","128","32"],ans:3,exp:"IPv4 = 32 bits, written as 4 dotted decimal octets."},
{q:"What does DNS do?",opts:["Encrypts data","Translates domain names to IPs","Assigns MAC addresses","Routes packets"],ans:1,exp:"DNS = Domain Name System, translates human-readable names to IP addresses."},
{q:"Which medium is immune to electromagnetic interference?",opts:["Twisted pair","Coaxial","Fibre-optic","Wireless"],ans:2,exp:"Fibre-optic uses light, making it immune to electromagnetic interference."}
]},

{id:"proc",icon:"🧠",title:"Processor & FDE Cycle",notes:`
<h3>Von Neumann Architecture</h3>
<ul>
<li>Instructions & data stored in <strong>same memory</strong></li>
<li>Sequential execution</li>
<li>Components: CPU + Memory + I/O</li>
</ul>
<h3>CPU Components</h3>
<ul>
<li><strong>ALU</strong> – Arithmetic & Logic operations</li>
<li><strong>CU</strong> – Control Unit, manages data flow & signals</li>
</ul>
<h3>Key Registers</h3>
<ul>
<li><strong>PC</strong> (Program Counter) – Address of NEXT instruction</li>
<li><strong>MAR</strong> (Memory Address Register) – Address being accessed</li>
<li><strong>MDR</strong> (Memory Data Register) – Data read/written</li>
<li><strong>CIR</strong> (Current Instruction Register) – Instruction being decoded</li>
<li><strong>ACC</strong> (Accumulator) – Stores ALU results</li>
<li><strong>IX</strong> (Index Register) – For indexed addressing</li>
</ul>
<h3>Buses</h3>
<ul>
<li><strong>Address Bus</strong> – One-way (CPU→Memory), carries addresses</li>
<li><strong>Data Bus</strong> – Bi-directional, carries data</li>
<li><strong>Control Bus</strong> – Bi-directional, carries control signals</li>
</ul>
<h3>Fetch-Decode-Execute Cycle</h3>
<div class="highlight-box">
<strong>FETCH:</strong> PC → MAR → Memory → MDR → CIR, then PC increments<br>
<strong>DECODE:</strong> CU decodes the instruction in CIR<br>
<strong>EXECUTE:</strong> ALU performs operation / data transferred
</div>
<h3>Interrupts</h3>
<p>Signals that pause FDE cycle for urgent tasks. CPU saves current state, handles interrupt, then restores state.</p>`,
quiz:[
{q:"In Von Neumann architecture, where are instructions and data stored?",opts:["Separate memories","Same memory","Only in registers","On disk"],ans:1,exp:"Von Neumann = instructions and data share the same memory."},
{q:"Which register holds the address of the NEXT instruction?",opts:["MAR","MDR","CIR","PC"],ans:3,exp:"PC (Program Counter) always points to the next instruction to fetch."},
{q:"The Address Bus is:",opts:["Bi-directional","One-way (CPU to Memory)","One-way (Memory to CPU)","Tri-directional"],ans:1,exp:"Address bus is unidirectional – CPU sends addresses to memory."},
{q:"What does CIR hold?",opts:["Next instruction address","Data from memory","Current instruction being decoded","ALU result"],ans:2,exp:"CIR = Current Instruction Register, holds the instruction currently being decoded."},
{q:"What happens first in the FDE cycle?",opts:["CU decodes CIR","PC copied to MAR","ALU calculates","MDR copied to CIR"],ans:1,exp:"First step: contents of PC are copied to MAR to fetch the instruction."},
{q:"The Data Bus carries:",opts:["Only data","Only addresses","Data and instructions","Control signals"],ans:2,exp:"The data bus carries both data AND instructions between CPU and memory."},
{q:"What does the ALU do?",opts:["Fetches instructions","Manages I/O","Performs arithmetic and logic","Stores addresses"],ans:2,exp:"ALU = Arithmetic Logic Unit, performs calculations and logical comparisons."}
]},

{id:"sql",icon:"🗄️",title:"SQL & Databases",notes:`
<h3>Relational Database Concepts</h3>
<ul>
<li><strong>Table (Relation)</strong> – Data organized in rows & columns</li>
<li><strong>Attribute</strong> – Column (field)</li>
<li><strong>Tuple</strong> – Row (record)</li>
</ul>
<h3>Keys</h3>
<ul>
<li><strong>Primary Key</strong> – Uniquely identifies each record</li>
<li><strong>Foreign Key</strong> – Links to primary key of another table (referential integrity)</li>
<li><strong>Candidate Key</strong> – Any attribute that COULD be a primary key</li>
</ul>
<h3>Normalization</h3>
<ul>
<li><strong>1NF</strong> – No repeating groups, atomic values</li>
<li><strong>2NF</strong> – 1NF + no partial dependencies (all non-key fields depend on WHOLE primary key)</li>
<li><strong>3NF</strong> – 2NF + no transitive dependencies</li>
</ul>
<h3>SQL Commands</h3>
<ul>
<li><strong>DDL:</strong> <code>CREATE TABLE</code>, <code>ALTER TABLE</code>, <code>DROP TABLE</code></li>
<li><strong>DML:</strong> <code>INSERT INTO</code>, <code>UPDATE</code>, <code>DELETE FROM</code></li>
<li><strong>DQL:</strong> <code>SELECT ... FROM ... WHERE ... ORDER BY ... GROUP BY</code></li>
</ul>`,
quiz:[
{q:"A row in a database table is called a:",opts:["Attribute","Relation","Tuple","Field"],ans:2,exp:"Tuple = row/record in a relational database."},
{q:"What does a Foreign Key do?",opts:["Uniquely identifies a record","Links to primary key of another table","Encrypts data","Sorts records"],ans:1,exp:"Foreign key creates a link between two tables by referencing another table's primary key."},
{q:"1NF requires:",opts:["No transitive dependencies","No partial dependencies","No repeating groups, atomic values","Foreign keys"],ans:2,exp:"1NF = no repeating groups and all values must be atomic (indivisible)."},
{q:"Which SQL command retrieves data?",opts:["INSERT","UPDATE","SELECT","CREATE"],ans:2,exp:"SELECT is the DQL command used to query/retrieve data."},
{q:"DROP TABLE is a ___ command.",opts:["DML","DQL","DDL","DCL"],ans:2,exp:"DROP TABLE is DDL (Data Definition Language) – it defines/modifies structure."},
{q:"3NF removes:",opts:["Repeating groups","Partial dependencies","Transitive dependencies","All dependencies"],ans:2,exp:"3NF = 2NF + no transitive dependencies (non-key depending on non-key)."},
{q:"Which SQL clause sorts results?",opts:["GROUP BY","WHERE","HAVING","ORDER BY"],ans:3,exp:"ORDER BY sorts the result set (ASC or DESC)."}
]},

{id:"mem",icon:"💾",title:"Memory & Storage",notes:`
<h3>Primary Memory</h3>
<ul>
<li><strong>RAM</strong> – Volatile, read-write
  <ul>
  <li><strong>DRAM</strong> – Uses capacitors, needs refreshing. Cheaper, used for main memory.</li>
  <li><strong>SRAM</strong> – Uses flip-flops, no refresh needed. Faster, used for cache.</li>
  </ul>
</li>
<li><strong>ROM</strong> – Non-volatile, read-only. Stores bootstrap/startup programs.</li>
</ul>
<h3>Secondary Storage</h3>
<ul>
<li><strong>Magnetic</strong> – Hard disk (platters), Tape (sequential)</li>
<li><strong>Optical</strong> – CD/DVD/Blu-ray (pits and lands, laser)</li>
<li><strong>Solid State</strong> – SSD/Flash (NAND, no moving parts, faster, more durable)</li>
</ul>`,
quiz:[
{q:"DRAM uses ___ and needs refreshing.",opts:["Flip-flops","Transistors","Capacitors","Registers"],ans:2,exp:"DRAM uses capacitors that leak charge, so they need constant refreshing."},
{q:"Which type of RAM is used for CPU cache?",opts:["DRAM","SRAM","SDRAM","DDR"],ans:1,exp:"SRAM is faster (uses flip-flops) and is used for cache memory."},
{q:"ROM is used to store:",opts:["User files","Applications","Bootstrap programs","Temporary data"],ans:2,exp:"ROM stores the bootstrap program that starts the computer."},
{q:"SSDs use ___ technology.",opts:["Magnetic platters","Laser/pits","NAND flash","Capacitors"],ans:2,exp:"SSDs use NAND flash technology with no moving parts."},
{q:"Which storage is volatile?",opts:["ROM","SSD","Hard Disk","RAM"],ans:3,exp:"RAM is volatile – loses all data when power is turned off."}
]},

{id:"asm",icon:"⚙️",title:"Assembly & Addressing",notes:`
<h3>Assembly Language</h3>
<p>Uses mnemonics (ADD, STO, LDD) instead of binary machine code.</p>
<h3>Addressing Modes</h3>
<ul>
<li><strong>Immediate (#)</strong> – Operand IS the value. e.g. <code>LDM #5</code> loads 5</li>
<li><strong>Direct</strong> – Operand is the ADDRESS of the value. e.g. <code>LDD 100</code></li>
<li><strong>Indirect (@)</strong> – Operand is address OF the address. e.g. <code>LDI 100</code></li>
<li><strong>Indexed</strong> – Address = base + IX register. e.g. <code>LDX 100</code> → address 100+IX</li>
</ul>
<h3>Assembler (Two-Pass)</h3>
<ul>
<li><strong>Pass 1:</strong> Scan source → build Symbol Table (labels → addresses)</li>
<li><strong>Pass 2:</strong> Translate mnemonics → machine code using Symbol Table + Opcode Table</li>
</ul>`,
quiz:[
{q:"In immediate addressing, the operand is:",opts:["A memory address","The actual value","An address of an address","Base + offset"],ans:1,exp:"Immediate = the operand itself is the data value, not an address."},
{q:"Indirect addressing means:",opts:["Value is in the operand","Operand points to address containing the address","Operand + IX","Direct memory access"],ans:1,exp:"Indirect = operand holds an address that contains ANOTHER address where the value is."},
{q:"What does Pass 1 of the assembler create?",opts:["Machine code","Object code","Symbol Table","Executable"],ans:2,exp:"Pass 1 builds the Symbol Table, mapping labels to their memory addresses."},
{q:"LDX 100 with IX=3 accesses address:",opts:["100","3","103","97"],ans:2,exp:"Indexed addressing: effective address = 100 + IX = 100 + 3 = 103."},
{q:"Assembly language uses:",opts:["Binary opcodes","Hexadecimal only","Mnemonics","High-level syntax"],ans:2,exp:"Assembly uses mnemonics like ADD, SUB, LDD as human-readable instruction codes."}
]},

{id:"sys",icon:"🖥️",title:"System Software",notes:`
<h3>Operating System Functions</h3>
<ul>
<li><strong>Memory Management</strong> – Paging & Segmentation</li>
<li><strong>Process Management</strong> – Scheduling (Round Robin, Priority, etc.)</li>
<li><strong>File Management</strong> – Naming, folders, permissions</li>
<li><strong>Device Management</strong> – Drivers for hardware</li>
<li><strong>Security</strong> – Authentication, access control</li>
</ul>
<h3>Translators</h3>
<ul>
<li><strong>Compiler</strong> – Whole source → object code. Fast execution. No source needed to run.</li>
<li><strong>Interpreter</strong> – Line by line. Easier debugging. Source needed at runtime.</li>
<li><strong>Assembler</strong> – Assembly → Machine code.</li>
</ul>
<h3>Utility Software</h3>
<p>Defragmenter, Disk Formatter, Virus Checker, Backup utilities.</p>
<h3>IDE Features</h3>
<p>Prettyprinting, context-sensitive prompts, syntax highlighting, debugger (breakpoints, stepping, variable watch).</p>`,
quiz:[
{q:"A compiler translates:",opts:["Line by line","Whole program at once","Assembly to machine code","Machine to assembly"],ans:1,exp:"Compiler translates the entire source code into object code before execution."},
{q:"Which translator is best for debugging?",opts:["Compiler","Assembler","Interpreter","Linker"],ans:2,exp:"Interpreter runs line-by-line, stopping at the error line – easier to debug."},
{q:"Paging is a type of:",opts:["File management","Memory management","Security","Scheduling"],ans:1,exp:"Paging is a memory management technique that divides memory into fixed-size pages."},
{q:"An assembler translates:",opts:["High-level to machine code","Assembly to machine code","Machine code to assembly","Binary to hex"],ans:1,exp:"An assembler converts assembly language mnemonics into machine code."},
{q:"Which is NOT a utility software?",opts:["Defragmenter","Compiler","Virus Checker","Backup"],ans:1,exp:"A compiler is a translator, not a utility. Utilities maintain/optimize the system."}
]},

{id:"security",icon:"🔒",title:"Security & Integrity",notes:`
<h3>Threats</h3>
<ul>
<li><strong>Virus</strong> – Attaches to files, needs host to spread</li>
<li><strong>Worm</strong> – Self-replicating, spreads without host</li>
<li><strong>Trojan</strong> – Disguised as legitimate software</li>
<li><strong>Spyware</strong> – Secretly monitors user activity</li>
<li><strong>Phishing</strong> – Fake emails/sites to steal credentials</li>
<li><strong>Pharming</strong> – Redirects legit URL to fake site (DNS poisoning)</li>
</ul>
<h3>Security Measures</h3>
<ul>
<li><strong>Firewall</strong> – Filters incoming/outgoing traffic</li>
<li><strong>Encryption</strong> – Scrambles data to prevent unauthorized access</li>
<li><strong>Authentication</strong> – Passwords, biometrics, 2FA</li>
</ul>
<h3>Data Integrity</h3>
<ul>
<li><strong>Validation</strong> – Presence, Format, Length, Range, Type, Check Digit</li>
<li><strong>Verification</strong> – Double entry, Visual check, Checksum, Parity check</li>
</ul>`,
quiz:[
{q:"A worm differs from a virus because it:",opts:["Needs a host file","Is less dangerous","Self-replicates without a host","Only affects hardware"],ans:2,exp:"Worms spread independently across networks without needing to attach to a host file."},
{q:"Pharming involves:",opts:["Fake emails","DNS poisoning to redirect URLs","Physical theft","Brute force attacks"],ans:1,exp:"Pharming redirects users from legitimate websites to fake ones via DNS poisoning."},
{q:"Range check is a type of:",opts:["Verification","Validation","Encryption","Authentication"],ans:1,exp:"Range check is validation – ensuring data falls within acceptable min/max values."},
{q:"Double entry is a type of:",opts:["Validation","Verification","Encryption","Hashing"],ans:1,exp:"Double entry = verification method where data is entered twice and compared."},
{q:"A firewall:",opts:["Encrypts all data","Filters network traffic","Removes viruses","Backs up data"],ans:1,exp:"A firewall monitors and filters incoming/outgoing network traffic based on rules."}
]},

{id:"logic",icon:"🔲",title:"Logic Gates",notes:`
<h3>Basic Gates</h3>
<ul>
<li><strong>AND</strong> – Output 1 only if ALL inputs are 1</li>
<li><strong>OR</strong> – Output 1 if ANY input is 1</li>
<li><strong>NOT</strong> – Inverts input (1→0, 0→1)</li>
</ul>
<h3>Universal Gates</h3>
<ul>
<li><strong>NAND</strong> – NOT + AND. Can build ANY other gate from NANDs alone.</li>
<li><strong>NOR</strong> – NOT + OR. Also universal.</li>
</ul>
<h3>XOR</h3>
<p>Output 1 when inputs are DIFFERENT. (Exclusive OR)</p>
<h3>Truth Tables</h3>
<p>Define the output for every combination of inputs. Essential for designing logic circuits.</p>`,
quiz:[
{q:"AND gate: 1 AND 0 = ?",opts:["1","0"],ans:1,exp:"AND requires ALL inputs to be 1. Since one is 0, output = 0."},
{q:"OR gate: 0 OR 1 = ?",opts:["0","1"],ans:1,exp:"OR outputs 1 if ANY input is 1."},
{q:"NAND is called universal because:",opts:["It's the most common","You can build any gate from NANDs","It uses the least power","It's the fastest"],ans:1,exp:"NAND (and NOR) gates are universal – any other gate can be constructed using only NANDs."},
{q:"XOR: 1 XOR 1 = ?",opts:["1","0"],ans:1,exp:"XOR outputs 1 only when inputs are DIFFERENT. 1 XOR 1 = same = 0."},
{q:"NOT 0 = ?",opts:["0","1"],ans:1,exp:"NOT inverts the input. NOT 0 = 1."},
{q:"What does a truth table show?",opts:["Circuit diagram","Output for all input combos","Only valid inputs","Gate symbols"],ans:1,exp:"A truth table lists every possible input combination and its corresponding output."}
]},

{id:"ethics",icon:"⚖️",title:"Ethics & Ownership",notes:`
<h3>Software Licenses</h3>
<ul>
<li><strong>Commercial</strong> – Paid, no source code access</li>
<li><strong>Open Source</strong> – Source code provided, can modify</li>
<li><strong>Shareware</strong> – Free trial, then pay</li>
<li><strong>Freeware</strong> – Free to use, no source code</li>
</ul>
<h3>Copyright</h3>
<p>Legal protection for original work (code, images, music). Prevents unauthorized copying.</p>
<h3>Professional Ethics</h3>
<p>Codes of conduct from BCS, IEEE/ACM: act in public interest, maintain competence, respect privacy.</p>`,
quiz:[
{q:"Open source software:",opts:["Cannot be modified","Provides source code","Must be paid for","Has no license"],ans:1,exp:"Open source = source code is available and can be freely modified."},
{q:"Shareware is:",opts:["Always free","Free trial then paid","Open source","Illegal"],ans:1,exp:"Shareware = try before you buy. Free trial period, then requires payment."},
{q:"Copyright protects:",opts:["Ideas only","Original creative work","Hardware designs","Network protocols"],ans:1,exp:"Copyright provides legal protection for original works like code, images, and text."},
{q:"BCS is a:",opts:["Programming language","Professional body","Hardware company","Database system"],ans:1,exp:"BCS (British Computer Society) is a professional body with codes of conduct for IT professionals."}
]},

{id:"rep",icon:"📊",title:"Data Representation",notes:`
<h3>Text Encoding</h3>
<ul>
<li><strong>ASCII</strong> – 7-bit (128 chars) or 8-bit Extended (256)</li>
<li><strong>Unicode</strong> – Variable-length (UTF-8), supports ALL world languages</li>
</ul>
<h3>Images</h3>
<ul>
<li><strong>Bitmap</strong> – Grid of pixels. File size = resolution × colour depth</li>
<li><strong>Vector</strong> – Objects defined by geometric properties. Scales without quality loss.</li>
</ul>
<h3>Sound</h3>
<ul>
<li><strong>Sampling Rate</strong> – Samples per second (Hz). Higher = better quality.</li>
<li><strong>Sampling Resolution</strong> – Bits per sample. More bits = more accurate.</li>
</ul>
<h3>Compression</h3>
<ul>
<li><strong>Lossless</strong> – Perfect reconstruction (RLE, Huffman coding)</li>
<li><strong>Lossy</strong> – Some data discarded permanently (JPEG, MP3)</li>
</ul>`,
quiz:[
{q:"Unicode vs ASCII – which supports more characters?",opts:["ASCII","Unicode","Both the same","Neither"],ans:1,exp:"Unicode supports virtually all world languages. ASCII only covers 128/256 characters."},
{q:"Vector graphics advantage over bitmap:",opts:["Smaller colour depth","Scales without quality loss","Faster to render","Uses pixels"],ans:1,exp:"Vectors use mathematical descriptions of shapes, so they scale perfectly at any size."},
{q:"Higher sampling rate means:",opts:["Larger file, lower quality","Smaller file","Larger file, better quality","No difference"],ans:2,exp:"More samples per second = more accurate sound reproduction, but larger file size."},
{q:"RLE is a type of ___ compression.",opts:["Lossy","Lossless"],ans:1,exp:"RLE (Run Length Encoding) is lossless – original data can be perfectly reconstructed."},
{q:"Bitmap file size depends on:",opts:["Only resolution","Only colour depth","Resolution × colour depth","File format only"],ans:2,exp:"Bitmap size = width × height × colour depth (bits per pixel)."}
]}
];
