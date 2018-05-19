import pandas as pd
import numpy as np
import plotly.graph_objs as go
from plotly.offline import plot
import cherrypy

class make_graph(object):
    def __init__(self, path_xlsx, path_json):
        self.xlsx_df = pd.read_excel(path_xlsx)
        json = pd.read_json(path_json)
        self.json_data_df = json[['abuse', 'company', 'emotion', 'review-at', 'sentiment']]
        dic = self.xlsx_df.to_dict('records')
        comp = {i['company_name']: {j: 0 for j in range(1, 13)} for i in dic}
        comp.pop(np.nan)
        for i in dic:
            if i['company_name'] is np.nan:
                continue
            comp[i['company_name']][int(i[u'review_created_at'].split('-')[1])] += 1
        self.data = comp

    def gen_review_graph(self, company):
        dd = self.data[company]
        trace1 = go.Scatter(
            x=dd.keys(),
            y=dd.values(),
            name=company + ' Review Graph'
            )
        data = [trace1]
        layout = go.Layout(
            title='Reviews History Graph',
            xaxis=dict(
                title='Months',
                titlefont=dict(
                    family='Courier New, monospace',
                    size=18,
                    color='#7f7f7f'
                    )
                ),
            yaxis=dict(
                title='Number of Reviews',
                titlefont=dict(
                    family='Courier New, monospace',
                    size=18,
                    color='#7f7f7f'
                    )
                )
            )
        return plot(go.Figure(data=data, layout=layout), auto_open=False,filename='rev.html')

    def get_abusive(self, company):
        df = self.json_data_df[self.json_data_df['company'] == company].copy()
        ab = [i['sentence-type'] for i in df['abuse'].tolist()]
        nabu = ab.count('Non Abusive')
        abu = len(ab) - ab.count('Non Abusive')
        lab = ['Abusive','Non Abusive']
        val = [abu,nabu]
        return plot([go.Pie(labels=lab, values=val)], auto_open=False, filename='abv.html')

    def get_emotion(self, company):
        df = self.json_data_df[self.json_data_df['company'] == company].copy()
        lis = [i['emotion'] for i in df['emotion'].tolist()]
        lab = ['Happy', 'Bored','Sarcasm','Excited','Sad','Fear','Angry']
        val = map(lambda x:lis.count(x),lab)
        return plot([go.Pie(labels=lab, values=val)], auto_open=False,filename='em.html')

    def get_sent(self, company):
        df = self.json_data_df[self.json_data_df['company'] == company].copy()
        lis = [i['sentiment'] for i in df['sentiment'].tolist()]
        lab = ['negative', 'neutral','positive']
        val = map(lambda x:lis.count(x),lab)
        return plot([go.Pie(labels=lab, values=val)], auto_open=False,filename='sent.html')

class HelloWorld(object):
    def __init__(self, path_xlsx,path_json):
        self.graph = make_graph(path_xlsx,path_json)
    @cherrypy.expose
    def index(self):
        return "Hello World!"
    @cherrypy.expose
    def show_graph(self, company):
        return """
        <iframe src='{}' style='width:100%;height:100%'></iframe><br>
        Abuse percentage graph<br>
        <iframe src='{}' style='width:100%;height:100%'></iframe><br>
        Sentiment analysis graph<br>
        <iframe src='{}' style='width:100%;height:100%'></iframe><br>
        Emotion analysis graph<br>
        <iframe src='{}' style='width:100%;height:100%'></iframe><br>
        """.format('/show_rev?company='+company,
                   '/show_abv?company=' + company,
                   '/show_sent?company=' + company,
                   '/show_em?company=' + company)

    @cherrypy.expose
    def show_rev(self, company):
        rev = self.graph.gen_review_graph(company)
        return open(rev.replace(r'file://', '')).read()

    @cherrypy.expose
    def show_abv(self, company):
        abv = self.graph.get_abusive(company)
        return open(abv.replace(r'file://', '')).read()

    @cherrypy.expose
    def show_sent(self, company):
        sent = self.graph.get_sent(company)
        return open(sent.replace(r'file://', '')).read()

    @cherrypy.expose
    def show_em(self, company):
        em = self.graph.get_emotion(company)
        return open(em.replace(r'file://', '')).read()


path_xlsx = r'top-25-good-companies-reviews-cleandata.xlsx'
path_json = r'good.json'
cherrypy.config.update({'server.socket_port': 8050})
cherrypy.quickstart(HelloWorld(path_xlsx,path_json))