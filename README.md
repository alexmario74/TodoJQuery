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
   