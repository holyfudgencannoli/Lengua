from kivy.app import App
from kivy.uix.floatlayout import FloatLayout
from kivy.uix.button import Button
from kivy.uix.textinput import TextInput
from kivy.uix.label import Label
from kivy.uix.screenmanager import ScreenManager, Screen, SwapTransition
from kivy.core.window import Window

class home(Screen):
    def __init__(self, **kwargs):
        super(home, self).__init__(**kwargs)
        layout = FloatLayout(size=(400,400))
        label = Label(text="Grocer",size_hint=(.75,.2),pos_hint={'x':.125,'y':.7},font_size='100sp')
        button1 = Button(text="Create a new item",size_hint=(.75,.2),pos_hint={'x':.125,'y':.4})
        button2 = Button(text="Current items & inventory",size_hint=(.75,.2),pos_hint={'x':.125,'y':.2})
        button3 = Button(text="Print a grocery list",size_hint=(.75,.2),pos_hint={'x':.125,'y':0})
        button1.bind(on_press=self.go_to_new_item)
        button2.bind(on_press=self.go_to_inventory)
        button3.bind(on_press=self.go_to_list)
        layout.add_widget(label)
        layout.add_widget(button1)
        layout.add_widget(button2)
        layout.add_widget(button3)
        self.add_widget(layout)

    def go_to_new_item(self, instance):
        self.manager.current = 'new_item'

    def go_to_inventory(self, instance):
        self.manager.current = 'inventory'

    def go_to_list(self, instance):
        self.manager.current = 'create_list'

class new_item(Screen):
    def __init__(self, **kwargs):
        super(new_item, self).__init__(**kwargs)
        layout = FloatLayout(size=(400,400))
        label = Label(text="Create a new item for your inventory",size_hint=(.75,.2),pos_hint={'x':.125,'y':.85})
        name_ilabel=Label(text="Name:",pos_hint={'x':.19,'y':.8},size_hint=(.05,.2))
        name_input=TextInput(size_hint=(.5,.05),pos_hint={'x':.25,'y':.8})
        pkg_unit_ilabel=Label()
        pkg_unit_input=TextInput(size_hint=(.5,.05),pos_hint={'x':.25,'y':.75})
        pkg_qty_ilabel=Label()
        pkg_qty_input=TextInput(size_hint=(.5,.05),pos_hint={'x':.25,'y':.7})
        inv_unit_ilabel=Label()
        inv_unit_input=TextInput(size_hint=(.5,.05),pos_hint={'x':.25,'y':.65})
        inv_qty_ilabel=Label()
        inv_qty_input=TextInput(size_hint=(.5,.05),pos_hint={'x':.25,'y':.6})
        button = Button(text="Go Back",size_hint=(.6,.1),pos_hint={'x':.2,'y':0})
        button.bind(on_press=self.go_back)
        layout.add_widget(label)
        layout.add_widget(name_ilabel)
        layout.add_widget(name_input)
        layout.add_widget(pkg_unit_input)
        layout.add_widget(pkg_qty_input)
        layout.add_widget(inv_unit_input)
        layout.add_widget(inv_qty_input)
        layout.add_widget(button)
        self.add_widget(layout)

    def go_back(self, instance):
        self.manager.current = 'home'

class inventory(Screen):
    def __init__(self, **kwargs):
        super(inventory, self).__init__(**kwargs)
        layout = FloatLayout(size=(400,400))
        label = Label(text="Current Items & Inventory",size_hint=(.75,.2),pos_hint={'x':.125,'y':.8})
        button = Button(text="Go Back",size_hint=(.6,.1),pos_hint={'x':.2,'y':0})
        button.bind(on_press=self.go_back)
        layout.add_widget(label)
        layout.add_widget(button)
        self.add_widget(layout)

    def go_back(self, instance):
        self.manager.current = 'home'

class create_list(Screen):
    def __init__(self, **kwargs):
        super(create_list, self).__init__(**kwargs)
        layout = FloatLayout(size=(400,400))
        label = Label(text="Create & Print a new grocery list",size_hint=(.75,.2),pos_hint={'x':.125,'y':.8})
        button = Button(text="Go Back",size_hint=(.6,.1),pos_hint={'x':.2,'y':0})
        button.bind(on_press=self.go_back)
        layout.add_widget(label)
        layout.add_widget(button)
        self.add_widget(layout)

    def go_back(self, instance):
        self.manager.current = 'home'

class MultiPageApp(App):
    def build(self):
        # Create a ScreenManager and add screens to it
        Window.clearcolor = (0, 0, 1, 1)
        sm = ScreenManager(transition=SwapTransition())
        home_page = home(name='home')
        new_item_page = new_item(name='new_item')
        inventory_page = inventory(name='inventory')
        create_list_page = create_list(name='create_list')
        sm.add_widget(home_page)
        sm.add_widget(new_item_page)
        sm.add_widget(inventory_page)
        sm.add_widget(create_list_page)
        return sm

if __name__ == '__main__':
    MultiPageApp().run()







# class GrocerRoot(BoxLayout):
#     def __init__(self, **kwargs):
#         super(GrocerRoot, self).__init__(**kwargs)
        
#         # Set the background color to blue
#         Window.clearcolor = (0, .5, 1, 1)  # Blue color in RGB format
        
#        # Center the layout within the window
#         self.orientation = 'vertical'
#         self.cols = 2
#         self.spacing = 10  # Space between buttons
#         self.padding = [0, 20]  # Padding at the top and bottom of the column (horizontal padding is not needed since it centers automatically)
        
#         # Add a title label
#         title_label = Button(text='GROCER', size_hint=(None, None), height=50, width=300)
#         self.add_widget(title_label)
        
#         def callback(instance):
#             print('The button <%s> is being pressed' % instance.text)

#         btn1 = Button(text='Hello world 1')
#         btn1.bind(on_press=callback)
#         self.add_widget(btn1)

#         btn2 = Button(text='Hello world 2')
#         btn2.bind(on_press=callback)
#         self.add_widget(btn2)

# class GrocerApp(App):
#     def build(self):
#         return GrocerRoot()



# if __name__ == '__main__':
#     GrocerApp().run()
