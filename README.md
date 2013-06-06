TODO jQuery
===========

A simple, trivial jQuery based TODO application, to show an implementation of the Model-View-Controller design pattern.

Controller
-----------

Class methods:

  *register(evnt,fn,scope)*
  
   Register an handler function to listen for the given event.
  
   evnt: the name of the event to listen
  
   fn: the name of the callback function, or handler invoked when the event is raised
  
   scope: the object which the fn refers, if not given the controller object will be the context
  
  *unregister(evnt)*
  
   Removes all the registered handlers for the given evnt.
  
   evnt: the name of an event type
  
  *trigger(evnt,args...)*

   Raise the evnt event with the list of args... arguments.
  
   evnt: the name of an event type
  
   args...: a custom list of arguments


Model
-----

Class methods:

  *set(name, value)*
  
   Add or change an attribute with name and value.
   
   name: the name of the attribute
   
   value: the value of the attribute
   
  *get(name)*

   Return the value of the attribute with name name.
   
   name: the name of the attribute value
   
  *toJSON()*
  
   Returns the model as a flat object.


View
----

Class methods: 

  *render()*

   Render the view with the given model.


License
=======

The MIT License (MIT)

Copyright (c) 2013 M.A. Santini <alexmario@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
   