# Cpp Patterns #

## Factory + Cache ##

````
  
  shared_ptr<widget> make_widget(int id)
  {
    static map<int, weak_ptr<widget> > cache;
    static mutex mut_cache;
    lock_guard<mutex> hold(mut_cache);
    shared_ptr<widget> ret = cache[id].lock();
    if(!ret)
      cache[id] = ret = load_widget(id);
    
    return ret;
  }

````

## Unicode to Ansi ##


````

	std::string ToAnsi(std::wstring unicode)
  {
		size_t length = unicode.lenght();
		std::string ansi(length, ' ');
		for (size_t index = 0; index < len; ++index)
			ansi[index] = (char)unicode[index];
      
    return ansi;
  } 

````
