from selenium import webdriver
from selenium.webdriver.common.keys import Keys

driver = webdriver.Firefox()
driver.get("http://isvaldo.xyz")
elem = driver.find_element_by_class_name("altinput")
elem.send_keys("teste, escrita")  #Isso não funciona com a simulacao de keypress
elem.send_keys(Keys.RETURN)
assert "Erro:" not in driver.page_source
driver.close()


