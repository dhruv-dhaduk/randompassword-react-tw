function App() {
    return  (
        <div className="bg-slate-800 w-full max-w-xl h-fit absolute inset-0 m-auto p-4 rounded-lg">
            <div>
                
                <div className="flex justify-center items-stretch h-12">

                    <input 
                        type="text" 
                        value="ABCDEFGH"

                        disabled="true"

                        className="bg-white text-black flex-8 rounded-l-xl p-4 text-lg"
                    />

                    <button className="bg-blue-600 text-white flex-2 rounded-r-xl text-xl font-bold">
                        Copy
                    </button>

                </div>

                <div className="flex justify-between items-center flex-wrap gap-4 py-4">
                    
                    <div className="flex justify-center items-center gap-1">
                        <input 
                            type="range"
                            min="6"
                            max="30"
                            value="8"

                            className="accent-blue-600 h-1"
                        />

                        <p> 
                            (Length : 8)
                        </p>
                    </div>

                    <div className="flex justify-center items-center gap-1">
                        <input 
                            type="checkbox" 
                            
                            className="w-4 h-4"
                        />

                        <p>
                            Numbers
                        </p>
                    </div>

                    <div className="flex justify-center items-center gap-1">
                        <input 
                            type="checkbox" 
                            
                            className="w-4 h-4"
                        />

                        <p>
                            Symbols
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default App;
