##Grocery List App

Welcome to the grocery list project.  Where I try to make your food shopping that much easier.

This project is a take on the stsandard list project that most people attempt.  I do feel that I have done a few things that will set it apart from the standard list project.  

Concept:
I have been toying around with the idea of a grocery list for a very long time.  My girlfreind is a great cook, and like clockwork every Sunday we would go out grocery shopping.  As expected she would start it off by printing a list of items off of the computer and then we would go.  So I thouhght there has to be a better way.  So we started using apps to manage the lists, which worked great.

At the same time I was looking for a new project, so I thought great why not just make my own version.  So, that is what you have here V 2.0 of my grocery list app.  V 1.0 was written entirely out of vanilla javascript without any extra libraries for the UI and the backend was handeled with PHP.  In V 2 here, I have re-writeen everything to be used with React.

##Design:##

The biggest heardle to me, was the data design.  I tried several different combinations before, I setteled on this final version.  What I am doing adding to an array of objects.  Inside those objects, is a name, quantity, category, and cart value.  It is these objects that get updated throughout the project.
[
    {
        Name:''
        category:''
        quantity:''
        cart:false
    }
]

